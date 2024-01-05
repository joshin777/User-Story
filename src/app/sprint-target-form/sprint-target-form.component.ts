// sprint-target-form.component.ts

import { Component, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sprint-target-form',
  templateUrl: './sprint-target-form.component.html',
  styleUrls: ['./sprint-target-form.component.css']
})
export class SprintTargetFormComponent {

  constructor(private sharedService: SharedService) {}

  @Output() setTargetSprintPointsEvent = new EventEmitter<number>();
  @Output() autoSelectStoriesEvent = new EventEmitter<void>();
  @Output() clearStoriesEvent = new EventEmitter<void>();
  @Output() clearSelectedStoriesEvent = new EventEmitter<void>();

  targetSprintPoints: number = 0;
  // titleInput: string = '';
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
    // Emit an event to trigger the auto-select logic in the parent component
    this.autoSelectStoriesEvent.emit();
  }

  clearStories(): void {
    // Emit an event to trigger the clear stories logic in the parent component
    this.clearStoriesEvent.emit();

  }

  clearSelectedStories(): void {
    
    this.clearSelectedStoriesEvent.emit();
  }
}
