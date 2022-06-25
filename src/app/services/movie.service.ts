import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../classes/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _httpClient: HttpClient) { }

  private movieToEdit!: Movie | null;

  addMovie(m: Movie): Observable<Movie> {
    this._httpClient.get<number>(environment.baseUri + "/movie?_sort=id&_order=desc").subscribe(response => {
      m.id = response + 1;
    });
    return this._httpClient.post<Movie>(environment.baseUri + "/movie", m);
  }

  editMovie(m: Movie) {
    this._httpClient.delete(environment.baseUri + "/movie/" + m.id).subscribe(response => {
      this._httpClient.post<Movie>(environment.baseUri + "/movie", m).subscribe();
    });
  }

  deleteMovie(id: number): Observable<unknown> {
    return this._httpClient.delete(environment.baseUri + "/movie/" + id);
  }

  getAllMovies(): Observable<Movie[]> {
    return this._httpClient.get<Array<Movie>>(environment.baseUri + "/movie");
  }

  editMovieEvent(m: Movie) {
    this.movieToEdit = m;
  }

  iseditMovieEvent(): Movie | null {
    let m = this.movieToEdit;
    if (m) {
      this.movieToEdit = null;
    }
    return m;
  }

}
