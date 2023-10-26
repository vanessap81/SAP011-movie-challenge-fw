import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { FooterMoviesDetailsComponent } from '../footer-movies-details/footer-movies-details.component';
import { MainMoviesDetailsComponent } from '../main-movies-details/main-movies-details.component';
import { HeaderMoviesDetailsComponent } from '../header-movies-details/header-movies-details.component';

@NgModule({
  declarations: [
    MoviesComponent,
    HeaderMoviesDetailsComponent,
    FooterMoviesDetailsComponent,
    MainMoviesDetailsComponent
  ],
  exports: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
