import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/classes/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-or-edit-movie',
  templateUrl: './add-or-edit-movie.component.html',
  styleUrls: ['./add-or-edit-movie.component.css']
})
export class AddOrEditMovieComponent implements OnInit {

  constructor(private movieService: MovieService, private router: Router, private route: ActivatedRoute) { }

  editMovie!: Movie | null;
  movie!: Movie;
  edit = false;
  successCreation = false;

  movieForm = new FormGroup({
    title: new FormControl('', Validators.required),
    synopsis: new FormControl(''),
    rating: new FormControl<number | null>(null, [Validators.min(0), Validators.max(20)])
  });

  ngOnInit(): void {
    this.editMovie = this.movieService.iseditMovieEvent();
    if (this.editMovie) {
      this.edit = true;
      this.movieForm.controls.title.setValue(this.editMovie.title);
      this.movieForm.controls.rating.setValue(this.editMovie.rating);
      this.movieForm.controls.synopsis.setValue(this.editMovie.synopsis);
    }
  }

  submitMovie() {
    this.movie = {
      title: this.movieForm.controls.title.value || '',
      rating: this.movieForm.controls.rating.value,
      synopsis: this.movieForm.controls.synopsis.value || '',
    }

    if (!this.edit) {
      this.movieService.addMovie(this.movie).subscribe(response => {
        this.movie = response;
      });
      this.successCreation = true;
    }
    else {
      this.movie.id = this.editMovie!.id;
      this.movieService.editMovie(this.movie);
      this.successCreation = true;
    }
  }

  closeModal() {
    if (this.edit) {
      this.router.navigate(['../my-movies'], { relativeTo: this.route });
    } else {
      this.successCreation = false;
      this.movie = {
        title: '',
        rating: 0,
        synopsis: '',
      }
      this.movieForm.controls.title.setValue(null);
      this.movieForm.controls.synopsis.setValue(null);
      this.movieForm.controls.rating.setValue(null);
    }
  }
}
