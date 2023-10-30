import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../Movie';


@Injectable({
  providedIn: 'root'
})
export class DiscoverMovieService {
  key = 'api_key=64dd27c3ef4829715d2dd146a73e5d9e';

  private apiUrl = 'https://api.themoviedb.org/3/discover/movie?page';
  private apiUrl2 = 'https://api.themoviedb.org/3/movie';
  private apiUrl3 = 'https://api.themoviedb.org/3/search/movie?query';

  constructor(private http: HttpClient) {}

  discoverMovies(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}=${page}&${this.key}`);
  }

  getItem(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl2}/${id}?${this.key}`);
  }

  searchMovie(value: string): Observable<any> {
    return this.http.get(`${this.apiUrl3}=${value}&${this.key}`);
  }
}


// mudando a página 
// 'https://api.themoviedb.org/3/discover/movie?page= 3& api_key=64dd27c3ef4829715d2dd146a73e5d9e';

// 'https://api.themoviedb.org/3/search/movie?query= Barbie &include_adult=false&language=en-US&page=1'