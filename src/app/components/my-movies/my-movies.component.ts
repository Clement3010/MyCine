import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/classes/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  movies!: Array<Movie>;

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(response => {
      this.movies = response;
    });
  }

  editMovie(movie: Movie) {
    //this.editMovieEvent.emit(movie);
  }

  deleteMovie(movie: Movie) {
    let id = movie.id!;
    this.movieService.deleteMovie(id).subscribe(response => {

      this.movieService.getAllMovies().subscribe(response => {
        this.movies = response;
      });

    });
  }
}
