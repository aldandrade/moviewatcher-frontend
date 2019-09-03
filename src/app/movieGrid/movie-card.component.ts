import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { MovieModel } from '../movie.model';
import { MovieServiceService } from '../services/movie-service.service';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit, AfterViewInit {
  @ViewChild(MainPageComponent, {read: '', static: false}) mainChild: MainPageComponent;
  movieTitle = '';
  movieList: MovieModel[];
  constructor(private movieService: MovieServiceService) {
    this.movieList = [];
   }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.movieTitle = this.mainChild.movieTitle;
    this.search(this.movieTitle);
  }
  search(movieTitle: string): void {
    console.log('We also got here');
    this.movieService.getFromMovies(this.movieTitle).subscribe(
      (response: MovieModel[]) => this.handleMovieResponse(response),
      error => console.log(error));
  }
  handleMovieResponse(response: MovieModel[]) {
    this.movieList = response;
    console.log(response);
  }
}
