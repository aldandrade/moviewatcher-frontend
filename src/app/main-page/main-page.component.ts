import { Component, OnInit} from '@angular/core';
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
  searchFilter(movie:MovieModel, index, array){
    if (movie.title.toLowerCase().includes(this.movieTitle.toLowerCase())) {
      return movie;
    }
  }
  search(movieTitle: string): void {
    this.movieSearch.getFromMovies(this.movieTitle).subscribe(
      (response: MovieModel[]) => this.handleMovieResponse(response),
      error => console.log(error));
    console.log(this.movieSearch.getMoviesCount(movieTitle));
  }
  handleMovieResponse(response: MovieModel[]) {
    this.movieList = response;
    console.log(response);
  }
}

