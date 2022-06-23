import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/app/classes/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-or-edit-movie',
  templateUrl: './add-or-edit-movie.component.html',
  styleUrls: ['./add-or-edit-movie.component.css']
})
export class AddOrEditMovieComponent implements OnInit, OnChanges{

  constructor(private movieService: MovieService) { }

  @Input()  editMovie!: Movie;
  movie!: Movie;
  edit = false;

  movieForm = new FormGroup({
    title: new FormControl('', Validators.required),
    synopsis: new FormControl(''),
    rating: new FormControl<number | null>(null, [Validators.min(0), Validators.max(20)])
  });

  ngOnInit(): void {
  }

  submitMovie() {
    this.movie = {
      title: this.movieForm.controls.title.value || '',
      rating: this.movieForm.controls.rating.value,
      synopsis: this.movieForm.controls.synopsis.value || '',
    }
    
    if(!this.edit) {
      this.movieService.addMovie(this.movie).subscribe(response => {
        this.movie = response;
      });;
    }
    else {
      this.movie.id = this.editMovie.id;
      this.movieService.editMovie(this.movie).subscribe(response => {
        this.movie = response;
      });;
    }
    //this.newMovieEvent.emit(this.movie);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.editMovie == null) {
      this.edit = false;
    } else {
      this.edit = true;
      this.movieForm.controls.title.setValue(this.editMovie.title);
      this.movieForm.controls.rating.setValue(this.editMovie.rating);
      this.movieForm.controls.synopsis.setValue(this.editMovie.synopsis);
    }
  }

    //@Output() newMovieEvent = new EventEmitter<Movie>();
}
