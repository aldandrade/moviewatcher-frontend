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
    return this.http.get('api/movies', { params: { s: movieTitle } });
  }
  getNextPage(movieTitle: string, page: number) {
    return this.http.get('api/movies', { params: { s: movieTitle , page: page.toString()} });
  }
  getMoviesCount(movieTitle: string) {
  return this.http.get('api/movies/count', { params: { s: movieTitle } });
}
  getMovieInfo(movieId: number){

  return this.http.get('api/movie/' + movieId.toString() );
  }
}
