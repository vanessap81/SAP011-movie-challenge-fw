import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../Movie';


@Injectable({
  providedIn: 'root'
})
export class DiscoverMovieService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/157336?api_key=64dd27c3ef4829715d2dd146a73e5d9e';

  constructor(private http: HttpClient) {}

  getMoviesExample(id: number): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getInterstelar(): Observable<Movie> {
    return this.http.get<Movie>(this.apiUrl);
  }
}
