// story-list.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent {
  stories_from_form: { title: string; points: number; }[]=[];
  compOneData: any;

  constructor() { }

  @Input() stories: { title: string, points: number }[] = [];
  @Output() autoSelectStoriesEvent = new EventEmitter<void>();

  // autoSelectStories(): void {
  //   // Emit an event to trigger the auto-select logic in the parent component
  //   console.log(this.stories[1])
  //   this.autoSelectStoriesEvent.emit();
  // }


  ngOnInit() {
    // debugger
    this.stories_from_form = this.stories
    console.log(this.stories);
    console.log(this.stories_from_form);
  }

  clearStories(){
    console.log(this.stories);
    console.log("story list invoked");
    
    this.stories_from_form = []
    console.log(this.stories_from_form);
    
  }


  
}
