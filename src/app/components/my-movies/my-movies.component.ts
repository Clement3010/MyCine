import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/classes/movie';
import { MovieService } from 'src/app/services/movie.service';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {

  constructor(private movieService: MovieService, private router:Router, private route:ActivatedRoute, public dialog: MatDialog) { }

  movies!: Array<Movie>;
  moviesWithFilter!: Array<Movie>;

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(response => {
      this.movies = response;
      this.moviesWithFilter = response;
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
        this.moviesWithFilter = response;
      });

    });
  }

  gotoDetails(movie: Movie): void {
    this.dialog.open(MovieDetailsComponent, {
      data: {movie: movie}
    });
  }

  search(value: string){
    this.moviesWithFilter = this.movies.filter(m => m.title.toLowerCase().includes(value.toLowerCase()));
  }
}
