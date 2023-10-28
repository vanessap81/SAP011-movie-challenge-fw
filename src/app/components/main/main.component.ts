import { Component, OnInit } from '@angular/core';
import { DiscoverMovieService } from 'src/app/services/discover-movie.service';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  movie: Movie[] = [];
  

  constructor(private discoverMovieService: DiscoverMovieService) {
    this.getInterstelar();
  }

  ngOnInit(): void {
    this.printMovies();
  }

  printMovies() {
    this.discoverMovieService.getMoviesExample(1).subscribe((data)=> {
      console.log('OnInit do main Component');
      console.log(data);
    });
  }

  getInterstelar(): void {
    this.discoverMovieService.getInterstelar().subscribe((item)=> {this.movie.push(item)});
  }

  // Exemplo de event em botão
  show: boolean = false;
  showMessage(): void {
    this.show = !this.show; // toggle
  }
}
