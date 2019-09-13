import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MovieServiceService } from '../services/movie-service.service';
import { MovieModel } from '../movie.model';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movie: MovieModel;
  constructor(private route: ActivatedRoute, private movieSearch: MovieServiceService) {
    this.route.paramMap.subscribe(params => this.showMovie(params.get('id')));
  }

  ngOnInit() {
  }

  showMovie(movieId: any){
    this.movieSearch.getMovieInfo(movieId).subscribe(
      (response: MovieModel) => this.handleMovieResponse(response),
      error => console.log(error));
    }
    handleMovieResponse(response: MovieModel) {
      this.movie = response;
      console.log(this.movie);
    }

    favoriteMovie(movieId: string): void {
      //this.movieSearch.favoriteMovie(movie);
    }

  }
