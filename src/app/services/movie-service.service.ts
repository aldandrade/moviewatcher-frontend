import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) {
  }
  getFromMovies(movieTitle: string) {
    return this.http.get('api/movies', { params: { title: movieTitle } });
  }
}
