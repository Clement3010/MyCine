import { Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { Movie } from 'src/app/classes/movie';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {

  constructor() { }

  @Input()  movies: Array<Movie> = [];
  
  displayedColumns: string[] = ['title', 'synopsis', 'rating'];

  ngOnInit(): void {
  }
 
}
