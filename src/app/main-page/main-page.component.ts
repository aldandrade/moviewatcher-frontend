import { Component, OnInit} from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import { MovieModel } from '../movie.model';
import {PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  movieTitle = '';
  movieList: MovieModel[];
  movieCount: number;
  currentPage = 1;
  pages: number;
  pageEvent: PageEvent;
  constructor(private movieSearch: MovieServiceService) {
    this.movieList = [];
   }

  ngOnInit() { }
  searchFilter(movie:MovieModel, index, array){
    if (movie.title.toLowerCase().includes(this.movieTitle.toLowerCase())) {
      return movie;
    }
  }
  search(movieTitle: string): void {
    this.movieSearch.getFromMovies(this.movieTitle).subscribe(
      (response: MovieModel[]) => this.handleMovieResponse(response),
      error => console.log(error));
    this.movieSearch.getMoviesCount(this.movieTitle).subscribe(
        (response: number) => this.handleMovieCountResponse(response),
        error => console.log(error));
  }
  handleMovieResponse(response: MovieModel[]) {
    this.movieList = response;
  }
  handleMovieCountResponse(response: number){
    this.movieCount = response;
    if(this.movieCount > 10){
        this.pages = Math.floor(this.movieCount / 10);
    }
    console.log(this.movieCount, this.pages);
  }
}


