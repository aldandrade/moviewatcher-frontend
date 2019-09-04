import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.showMovie(params));
   }

  ngOnInit() {
  }

  showMovie(movieId: any){

  }

}
