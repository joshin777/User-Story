// sprint-target-form.component.ts

import { Component, Output, EventEmitter, Input } from '@angular/core';
import { StoryListComponent } from '../story-list/story-list.component';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-sprint-target-form',
  templateUrl: './sprint-target-form.component.html',
  styleUrls: ['./sprint-target-form.component.css']
})
export class SprintTargetFormComponent {
  
  constructor(private storyService: StoryService) { }

  @Output() setTargetSprintPointsEvent = new EventEmitter<number>();
  @Output() autoSelectStoriesEvent = new EventEmitter<void>();
  @Output() clearStoriesEvent = new EventEmitter<void>();
  @Output() clearSelectedStoriesEvent = new EventEmitter<void>();

  @Input() stories: { title: string, points: number }[] = [];

  targetSprintPoints: number = 0;
  // titleInput: string = '';

  items = [
    { "title": "sstghs", "points": 4 },
    { "title": "sss", "points": 3 }
    // Add more items as needed
  ];


  selectedItems: any[] = [];
  totalPoints = 0;

  compOneData: any;
  data : any;

  setTargetSprintPoints(): void {
    if (this.targetSprintPoints <= 0) {
      alert('Please enter a valid target sprint points value.');
      return;
    }

    this.setTargetSprintPointsEvent.emit(this.targetSprintPoints);
    // this.resetForm();
  }
  resetForm(): void {
    this.targetSprintPoints = 0;
  }

  autoSelectStories(): void {

    
  }
  // autoSelectStories(): void {
    
  //   // Emit an event to trigger the auto-select logic in the parent component
  //   // this.autoSelectStoriesEvent.emit();
  // }

  clearStories(): void {
    // Emit an event to trigger the clear stories logic in the parent component
    // this.clearStoriesEvent.emit();

    let myCompOneObj = new StoryListComponent();
    this.data = myCompOneObj.clearStories()

  }

  clearSelectedStories(): void {
    // Emit an event to trigger the clear selected stories logic in the parent component
    this.clearSelectedStoriesEvent.emit();
  }

  ngOnInit(){
    let myCompOneObj = new StoryListComponent();
    this.compOneData = myCompOneObj.compOneData;
  }
}
