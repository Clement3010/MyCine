import { Injectable } from '@angular/core';
import { Movie } from '../classes/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  addMovie(m: Movie): Movie {
    return m;
  }

  editMovie(m: Movie): boolean {
    return true;
  }

  deleteMovie(id: number): boolean {
    return true;
  }

  getAllMovies(): Movie[] {
    let movies = new Array<Movie>;
    return movies;
  }

}
