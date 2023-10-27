import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheMovieDbService {

  private apiUrl = 'https://api.themoviedb.org/3/movie/157336?api_key=64dd27c3ef4829715d2dd146a73e5d9e';

  constructor(private http: HttpClient) {}

  getMoviesExample(id: number): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get(url);
  }
}
