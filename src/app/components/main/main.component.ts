import { Component, OnInit } from '@angular/core';
import { DiscoverMovieService } from 'src/app/services/discover-movie.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  movies = [
    {name: "Interstelar", year: 2010},
    {name: "Inception", year: 2018},
    {name: "Baby's Drive", year: 2017},
  ];

  movieExample = [];

  constructor(private discoverMovieService: DiscoverMovieService) {}

  ngOnInit(): void {
    this.printMovies();
  }

  printMovies() {
    this.discoverMovieService.getMoviesExample(1).subscribe((data)=> {
      console.log('OnInit do main Component');
      console.log(data);
    });
  }

  // Exemplo de event em botão
  show: boolean = false;
  showMessage(): void {
    this.show = !this.show; // toggle
  }
}
