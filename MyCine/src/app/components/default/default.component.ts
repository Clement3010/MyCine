import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/classes/movie';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  movies: Array<Movie> = [];

  addOrUpdateMovie(newMovie: Movie) {
    this.movies.push(newMovie);
    console.log(this.movies);
  }
  
  ngOnInit(): void {
  }

}
