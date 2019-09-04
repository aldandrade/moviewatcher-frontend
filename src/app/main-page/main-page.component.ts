import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import { MovieModel } from '../movie.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  movieTitle = '';
  movieList: MovieModel[];
  constructor(private movieSearch: MovieServiceService) {
    this.movieList = [];
   }

  ngOnInit() { }

  search(movieTitle: string): void {
    console.log('We also got here');
    this.movieSearch.getFromMovies(this.movieTitle).subscribe(
      (response: MovieModel[]) => this.handleMovieResponse(response),
      error => console.log(error));
  }
  handleMovieResponse(response: MovieModel[]) {
    this.movieList = response;
    console.log(response);
  }
}

