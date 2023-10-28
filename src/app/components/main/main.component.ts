import { Component, OnInit } from '@angular/core';
import { DiscoverMovieService } from 'src/app/services/discover-movie.service';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  movies: Movie[] = [];
  page = '';

  constructor(private discoverMovieService: DiscoverMovieService) {
    this.printMovies();
  }

  ngOnInit(): void {
    this.printMovies();
  }

  printMovies() {
    this.discoverMovieService.discoverMovies().subscribe((data)=> {
      this.movies = data.results;
      this.page = data.page;
      console.log(data);
    });
  }

  // Exemplo de event em botão  // toggle
  // show: boolean = false;
  // showMessage(): void {
  //   this.show = !this.show; 
  // }
}
