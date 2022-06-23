import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrEditMovieComponent } from './components/add-or-edit-movie/add-or-edit-movie.component';
import { DefaultComponent } from './components/default/default.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MyMoviesComponent } from './components/my-movies/my-movies.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full'},
  {
    path: 'app', component: DefaultComponent,
    children: [
      { path: 'my-movies', component: MyMoviesComponent},
      { path: 'add-or-edit-movie', component: AddOrEditMovieComponent},
      { path: 'movie/:id', component: MovieDetailsComponent},
    ]
  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
