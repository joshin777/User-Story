

import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { StoryService } from './story.service';
import { StoryListComponent } from './story-list/story-list.component';
import { SprintTargetFormComponent } from './sprint-target-form/sprint-target-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(SprintTargetFormComponent, { static: false }) sprintTargetForm: SprintTargetFormComponent | undefined;
  stories: { title: string, points: number }[] = [];
  totalSprintPoints: number = 0;
  targetSprintPoints: number = 0;
  titleInput: string = ''; 
  selectedStories: { title: string, points: number }[] = [];
  autoSelectStoriesEvent: any;
  clearStoriesEvent: any;
  autoSelectedStories: { title: string, points: number }[] = [];
  @ViewChild(StoryListComponent, { static: false }) storyListComponent: StoryListComponent | undefined;
    
  constructor(private storyService: StoryService, private cdr: ChangeDetectorRef) {}
  
  setTargetSprintPoints(targetSprintPoints: number): void {
    this.targetSprintPoints = targetSprintPoints;
    console.log('Setting target sprint points:', targetSprintPoints);
  }
  handleAutoSelectStories(): void {
    this.selectedStories = [...this.stories];
  }
  // autoSelectStories(): void {
  //   this.selectedStories = [...this.stories];
  //   this.autoSelectStoriesEvent.emit();
  // }
  handleClearStories(): void {
    this.clearStories();
  }
  handleClearSelectedStories(): void {
    // Handle the event, for example, clear the autoSelectedStories
    this.autoSelectedStories = [];
  }
  fetchStoriesByTitle(title: string) {
    return new Observable(observer => {
      setTimeout(() => {
        const fetchedStories = [
          { title: `${title} Story 1`, points: 3 },
          { title: `${title} Story 2`, points: 5 },
        ];
        observer.next(fetchedStories);
        observer.complete();
      }, 1000); 
    });
  }


  autoSelectStories(): void {
    // Auto-select logic here
    this.stories.sort((a, b) => a.points - b.points);
    console.log('Stories sorted by points in ascending order:', this.stories);
    this.selectedStories = [...this.stories];
    console.log("auto select fn");
    console.log(this.stories);
    console.log(this.targetSprintPoints);

    var pointsum = 0;

    this.autoSelectedStories = []

    for (let i = 0; i < this.stories.length; i++) {
      const selectedItems = [this.stories[i]];
      let point = this.stories[i].points;

      pointsum = pointsum + point

      if (pointsum <= this.targetSprintPoints) {
        this.autoSelectedStories.push(...selectedItems);
      } else {
        pointsum = pointsum - point
      }
    }

    console.log('Items with sum of points below 5:', this.autoSelectedStories);


   
    this.autoSelectStoriesEvent.emit();
  }
  addStory(newStory: { title: string, points: number }): void {
    if (!this.isDuplicateStory(newStory.title)) {
      this.stories.push({ title: newStory.title, points: newStory.points });
    } else {
      alert('Story with the same title already exists.');
    }
  }

  isDuplicateStory(title: string): boolean {
    return this.stories.some(story => story.title === title);
  }



  clearStories(): void {
    this.stories = [];
   
  }

  clearSelectedStories(): void {
  }
}
