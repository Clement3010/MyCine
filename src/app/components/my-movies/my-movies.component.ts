import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/classes/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {

  constructor(private movieService: MovieService, private router:Router, private route:ActivatedRoute) { }

  movies!: Array<Movie>;

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(response => {
      this.movies = response;
    });
  }

  editMovie(movie: Movie) {
    this.movieService.editMovieEvent(movie);
    this.router.navigate(['../add-or-edit-movie'], { relativeTo: this.route });
  }

  deleteMovie(movie: Movie) {
    let id = movie.id!;
    this.movieService.deleteMovie(id).subscribe(response => {

      this.movieService.getAllMovies().subscribe(response => {
        this.movies = response;
      });

    });
  }

  gotoDetails(movie: Movie): void {
    this.router.navigate(['../movie', movie.id], { relativeTo: this.route });
  }
}
