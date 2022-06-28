import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/classes/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {movie: Movie}) { }

  ngOnInit(): void {
  }

}
