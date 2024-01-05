import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';

type Story = { title: string; points: number };
type StoryWithSelection = { title: string; points: number; selected: boolean };

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent {
  private clearSelectedStoriesSubscription: Subscription;

  @Input() stories: { title: string, points: number }[] = [];
  @Input() autoSelectedStories: { title: string, points: number }[] = [];
  @Output() autoSelectStoriesEvent = new EventEmitter<void>();
  @Output() clearSelectedStoriesEvent = new EventEmitter<void>();
  selectedStories: { title: string, points: number, selected: boolean }[] = [];

  constructor(private sharedService: SharedService) {
    this.clearSelectedStoriesSubscription = this.sharedService.getClearSelectedStoriesObservable()
      .subscribe(() => this.clearSelectedStories());
  }

  toggleSelection(story: { title: string, points: number }): void {
    const selectedStory = this.selectedStories.find(s => s.title === story.title);

    if (selectedStory) {
      selectedStory.selected = !selectedStory.selected;
    } else {
      this.selectedStories.push({ ...story, selected: true });
    }
  }

  isStorySelected(story: { title: string, points: number }): boolean {
    return this.selectedStories.some(s => s.title === story.title && s.selected);
  }

  clearSelectedStories(): void {
    this.autoSelectedStories = [];
    this.clearSelectedStoriesEvent.emit(); 
  }
  clearStories(): void {
    this.stories = [];
  }

  autoSelectStories(): void {
    this.stories.forEach(story => {
      const selectedStory = this.selectedStories.find(s => s.title === story.title);
      if (!selectedStory) {
        this.selectedStories.push({ ...story, selected: true });
      }
    });

    this.autoSelectStoriesEvent.emit();
  }

  ngOnDestroy(): void {
    this.clearSelectedStoriesSubscription.unsubscribe();
  }
}
