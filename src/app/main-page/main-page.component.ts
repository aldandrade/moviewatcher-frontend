import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  movieTitle = '';
  constructor(private movieSearch: MovieServiceService) { }

  ngOnInit() { }

  search(): void {
    }
  }
