import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/classes/movie';

@Component({
  selector: 'app-add-or-edit-movie',
  templateUrl: './add-or-edit-movie.component.html',
  styleUrls: ['./add-or-edit-movie.component.css']
})
export class AddOrEditMovieComponent implements OnInit {

  constructor() { }

  @Output() newMovieEvent = new EventEmitter<Movie>();

  movie!: Movie;

  movieForm = new FormGroup({
    title: new FormControl('', Validators.required),
    synopsis: new FormControl(''),
    rating: new FormControl<number | null>(null, [Validators.min(0), Validators.max(20)])
  });

  ngOnInit(): void {
  }

  submitMovie() {
    console.log(this.movieForm.value);
    this.movie = {
      title: this.movieForm.controls.title.value || '',
      rating: this.movieForm.controls.rating.value,
      synopsis: this.movieForm.controls.synopsis.value || '',
    }
    
    this.newMovieEvent.emit(this.movie);
  }

}
