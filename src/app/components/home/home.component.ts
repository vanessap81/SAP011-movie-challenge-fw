import { Component, OnInit } from '@angular/core';
import { TheMovieDbService } from 'src/app/services/the-movie-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private theMovieDBService: TheMovieDbService) {}

  ngOnInit(): void {
    this.bemVindo();
    this.showMovies();
  }

  bemVindo() {
    console.log('Bem-vindo ao Angular!');
  }

  showMovies() {
    this.theMovieDBService.getMoviesExample(1).subscribe((data)=> {
      console.log(data);
    });
  }
}
