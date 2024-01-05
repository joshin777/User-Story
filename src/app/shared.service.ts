// shared.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
    private clearSelectedStoriesSubject = new BehaviorSubject<void>(undefined);

  clearSelectedStories(): void {
    this.clearSelectedStoriesSubject.next();
  }

  getClearSelectedStoriesObservable(): Observable<void> {
    return this.clearSelectedStoriesSubject.asObservable();
  }
}
