// story-form.component.ts

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})
export class StoryFormComponent {
  @Output() addStory = new EventEmitter<{ title: string, points: number }>();
  storyTitle: string = '';
  storyPoints: number = 0;

  addNewStory(): void {
    if (!this.storyTitle.trim() && this.storyPoints <= 0) {
      alert('Please enter valid story details.');
      return;
    }

    this.addStory.emit({ title: this.storyTitle, points: this.storyPoints });
    this.resetForm();
  }

  resetForm(): void {
    this.storyTitle = '';
    this.storyPoints = 0;
  }
}
