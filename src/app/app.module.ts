// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoryFormComponent } from './story-form/story-form.component';
import { StoryListComponent } from './story-list/story-list.component';
import { SprintTargetFormComponent } from './sprint-target-form/sprint-target-form.component';
import { StoryService } from './story.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StoryFormComponent,
    StoryListComponent,
    SprintTargetFormComponent
  ],
  imports: [BrowserModule, FormsModule,HttpClientModule],
  providers: [ StoryService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
