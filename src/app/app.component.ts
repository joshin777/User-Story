// app.component.ts

import { ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StoryService } from './story.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stories: { title: string, points: number }[] = [];
  totalSprintPoints: number = 0;
  targetSprintPoints: number = 0;
  titleInput: string = ''; 
  selectedStories: { title: string, points: number }[] = [];
  autoSelectStoriesEvent: any;

    constructor(private storyService: StoryService, private cdr: ChangeDetectorRef) {}
  
  setTargetSprintPoints(targetSprintPoints: number): void {
    this.targetSprintPoints = targetSprintPoints;
    console.log('Setting target sprint points:', targetSprintPoints);
  }
  handleAutoSelectStories(): void {
    // Implement the logic to auto-select all stories here
    // For example, you can copy all stories to the 'selectedStories' array
    this.selectedStories = [...this.stories];
  }
  autoSelectStories(): void {
    // Auto-select logic here
    this.selectedStories = [...this.stories];

    // Emit an event to notify the parent component
    this.autoSelectStoriesEvent.emit();
  }

  fetchStoriesByTitle(title: string) {
    // Replace this with actual logic to fetch stories from your data source
    // For demonstration purposes, using a mock Observable
    return new Observable(observer => {
      // Simulate an API call
      setTimeout(() => {
        const fetchedStories = [
          { title: `${title} Story 1`, points: 3 },
          { title: `${title} Story 2`, points: 5 },
          // Add more stories as needed
        ];
        observer.next(fetchedStories);
        observer.complete();
      }, 1000); // Simulate a delay
    });
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
    this.totalSprintPoints = 0;
    this.clearSelectedStories();

    // Trigger change detection
    this.cdr.detectChanges();
  }

  clearSelectedStories(): void {
    // Implement logic to clear selected stories
    // This would depend on how you implement story selection in your application
  }
}
