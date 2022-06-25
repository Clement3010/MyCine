import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/classes/movie';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  editMovie!: Movie;

  ngOnInit(): void {
  }

  updateMovie(movie: Movie) {
    this.editMovie = movie;
  }
  
}
