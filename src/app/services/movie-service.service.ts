import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  private listener = new Subject<any>();
  constructor(private http: HttpClient) {
  }
  listen(): Observable<any> {
    return this.listener.asObservable();
 }

 filter(filterBy: string) {
    this.listener.next(filterBy);
 }
  getFromMovies(movieTitle: string) {
    return this.http.get('api/movies', { params: { title: movieTitle } });
  }
  getMoviesCount(movieTitle: string) {
  return this.http.get('api/movies/count', { params: { title: movieTitle } });
}
}
