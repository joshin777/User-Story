// story-list.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent {
  @Input() stories: { title: string, points: number }[] = [];
  @Output() autoSelectStoriesEvent = new EventEmitter<void>();
  autoSelectStories(): void {
    // Emit an event to trigger the auto-select logic in the parent component
    console.log(this.stories[1])
    // this.autoSelectStoriesEvent.emit();
  }
  
}
