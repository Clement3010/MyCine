import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Movie } from 'src/app/classes/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  @Output() editMovieEvent = new EventEmitter<Movie>();
  
  movies!: Array<Movie>;

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(response => {
      this.movies = response;
    });;
  }
 
  editMovie(movie: Movie) {
    this.editMovieEvent.emit(movie);
  }

}
