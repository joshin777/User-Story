// shared.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
    private clearSelectedStoriesSubject = new BehaviorSubject<void>(undefined);

  clearSelectedStories(): void {
    // this.clearSelectedStoriesSubject.next();
    this.selectedStoriesSubject.next([]);
  }

  getClearSelectedStoriesObservable(): Observable<void> {
    return this.clearSelectedStoriesSubject.asObservable();
  }
  private selectedStoriesSubject = new BehaviorSubject<{ title: string, points: number }[]>([]);
  selectedStories$ = this.selectedStoriesSubject.asObservable();

  getSelectedStoriesObservable(): Observable<{ title: string, points: number }[]> {
    return this.selectedStories$;
  }

}
