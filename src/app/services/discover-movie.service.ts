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

  private apiUrl = 'https://api.themoviedb.org/3/discover/movie?page';
  private apiUrl2 = 'https://api.themoviedb.org/3/movie';
  private apiUrl3 = 'https://api.themoviedb.org/3/search/movie?query';
  private apiUrl4 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres';
  private apiUrl5 = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
  private apiUrl6 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by';

  constructor(private http: HttpClient) {}

  discoverMovies(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}=${page}&${this.key}`);
  }

  getItem(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl2}/${id}?${this.key}`);
  }

  searchMovie(value: string): Observable<any> {
    return this.http.get(`${this.apiUrl3}=${value}&${this.key}`);
  }

  pickGenre(genres: string): Observable<any> {
    return this.http.get(`${this.apiUrl4}=${genres}&${this.key}`);
  }

  genreList(): Observable<any> {
    return this.http.get(`${this.apiUrl5}&${this.key}`);
  }

  getSortBy(sortBy: string): Observable<any> {
    return this.http.get(`${this.apiUrl6}=${sortBy}&${this.key}`);
  }
}


// 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=
// vote_average.desc'