// story-list.component.ts

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
  constructor(private sharedService: SharedService) {
    // Subscribe to clear selected stories event
    this.clearSelectedStoriesSubscription = this.sharedService.getClearSelectedStoriesObservable()
      .subscribe(() => this.clearSelectedStories());
  } 
  @Input() stories: { title: string, points: number }[] = [];
  @Output() autoSelectStoriesEvent = new EventEmitter<void>();
  @Output() clearSelectedStoriesEvent = new EventEmitter<void>();
  stories_from_input: { title: string; points: number; }[] = []
  selectedStories: { title: string, points: number, selected: boolean }[] = [];


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
    this.selectedStories.forEach(story => {
      story.selected = false; // Set the selected state to false
    });
  
    this.clearSelectedStoriesEvent.emit();
  }
  clearStories(): void {
    this.stories = [];
  }
  autoSelectStories(): void {
    // Emit an event to trigger the auto-select logic in the parent component
    console.log(this.stories[1])
    this.autoSelectStoriesEvent.emit();
  }
  ngOnDestroy(): void {
    // Unsubscribe from the subscription to avoid memory leaks
    this.clearSelectedStoriesSubscription.unsubscribe();
  }
}
