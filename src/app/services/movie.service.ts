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

  addMovie(m: Movie): Observable<Movie> {
    this._httpClient.get<number>(environment.baseUri + "/movie?_sort=id&_order=desc").subscribe(response => {
      m.id = response + 1;
    });;
    return this._httpClient.post<Movie>(environment.baseUri + "/movie", m);
  }

  editMovie(m: Movie): Observable<Movie> {
    let body = JSON.stringify(m);
    console.log(body);
    return this._httpClient.put<Movie>(environment.baseUri + "/movie/" + m.id, body);
  }

  deleteMovie(id: number): Observable<unknown> {
    console.log(id);
    return this._httpClient.delete(environment.baseUri + "/movie/" + id);
  }

  getAllMovies(): Observable<Movie[]> {
    return this._httpClient.get<Array<Movie>>(environment.baseUri + "/movie");
  }

}
