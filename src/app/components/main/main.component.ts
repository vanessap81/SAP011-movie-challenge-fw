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
  allMovies: Movie[] = [];
  curentlyPage = '';
  

  constructor(private discoverMovieService: DiscoverMovieService) {
  }

  ngOnInit(): void {
    this.printMovies(1);
    this.printAllMovies()
  }

  printMovies(page: number) {
    this.discoverMovieService.discoverMovies(page).subscribe((data)=> {
      this.movies = data.results;
      this.curentlyPage = data.page;
    });
  }

  previousPage() {
    let minusOne = Number(this.curentlyPage);
    if (minusOne === 1) {
      this.printMovies(1)
    } 
    minusOne--;
    this.printMovies(minusOne);
  }

  nextPage(): void {
    let plusOne = Number(this.curentlyPage);
    plusOne++;
    this.printMovies(plusOne);
  }


  printAllMovies() {
    this.discoverMovieService.searchDiscoverMovie().subscribe((data)=> {
      this.allMovies = data.results;
    });
  }

  search(e: Event): void {

    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.movies = this.allMovies.filter((movie) => {
      return movie.original_title.toLowerCase().includes(value);
    })
  }
}
