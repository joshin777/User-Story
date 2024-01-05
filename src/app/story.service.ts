// story.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  constructor(private http: HttpClient) {}

  fetchStoriesByTitle(title: string): Observable<{ title: string, points: number }[]> {
    // Replace this with your actual API endpoint
    const apiUrl = `your-api-url/${title}`;
    return this.http.get<{ title: string, points: number }[]>(apiUrl);
  }
}
