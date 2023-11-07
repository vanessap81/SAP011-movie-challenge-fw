import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../Movie';
import { Genre } from '../Genre';


@Injectable({
  providedIn: 'root'
})
export class DiscoverMovieService {
  key = 'api_key=64dd27c3ef4829715d2dd146a73e5d9e';

  private apiDiscover = 'https://api.themoviedb.org/3/discover/movie?page';
  private apiMovieId = 'https://api.themoviedb.org/3/movie';
  private apiSearchMovie = 'https://api.themoviedb.org/3/search/movie?query';
  private apiChooseGenre = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US';
  private apiGenreList = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
  private apiSortBy = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US';

  constructor(private http: HttpClient) {}

  discoverMovies(page: number): Observable<any> {
    return this.http.get(`${this.apiDiscover}=${page}&${this.key}`);
  }

  getItem(id: number): Observable<any> {
    return this.http.get(`${this.apiMovieId}/${id}?${this.key}`);
  }

  searchMovie(value: string): Observable<any> {
    return this.http.get(`${this.apiSearchMovie}=${value}&${this.key}`);
  }

  genreList(): Observable<any> {
    return this.http.get(`${this.apiGenreList}&${this.key}`);
  }

  chooseGenre(genres: string, page: number): Observable<any> {
    return this.http.get(`${this.apiChooseGenre}&page=${page}&with_genres=${genres}&${this.key}`);
  }

  getSortBy(sortBy: string, page: number): Observable<any> {
    return this.http.get(`${this.apiSortBy}&page=${page}&sort_by=${sortBy}&${this.key}`);
  }
}


// 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=
// vote_average.desc'