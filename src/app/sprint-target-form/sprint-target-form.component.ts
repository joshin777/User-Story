

import { Component, Output, EventEmitter, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sprint-target-form',
  templateUrl: './sprint-target-form.component.html',
  styleUrls: ['./sprint-target-form.component.css']
})
export class SprintTargetFormComponent {

  constructor(private sharedService: SharedService) {}
  @Input() stories: { title: string, points: number }[] = [];
  @Output() setTargetSprintPointsEvent = new EventEmitter<number>();
  @Output() autoSelectStoriesEvent = new EventEmitter<void>();
  @Output() clearStoriesEvent = new EventEmitter<void>();
  @Output() clearSelectedStoriesEvent = new EventEmitter<void>();
  
  targetSprintPoints: number = 0;

  setTargetSprintPoints(): void {
    if (this.targetSprintPoints <= 0) {
      alert('Please enter a valid target sprint points value.');
      return;
    }

    this.setTargetSprintPointsEvent.emit(this.targetSprintPoints);
  }
  resetForm(): void {
    this.targetSprintPoints = 0;
  }
  autoSelectStories(): void {
    this.autoSelectStoriesEvent.emit();
  }

  clearStories(): void {
    this.clearStoriesEvent.emit();
  }

  clearSelectedStories(): void {
    this.sharedService.clearSelectedStories();
  }
}
