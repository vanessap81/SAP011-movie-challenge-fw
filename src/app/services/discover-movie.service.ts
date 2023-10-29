import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../Movie';


@Injectable({
  providedIn: 'root'
})
export class DiscoverMovieService {
  private apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=64dd27c3ef4829715d2dd146a73e5d9e';

  constructor(private http: HttpClient) {}

  discoverMovies(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getItem(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`)
  }
}
