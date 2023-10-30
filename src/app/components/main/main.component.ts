import { Component, OnInit } from '@angular/core';
import { DiscoverMovieService } from 'src/app/services/discover-movie.service';
import { Movie } from 'src/app/Movie';
import { Genre } from 'src/app/Genre';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  movies: Movie[] = [];
  allMovies: Movie[] = [];
  listOfGenres: Genre[] = [];
  curentlyPage = '';
  

  constructor(private discoverMovieService: DiscoverMovieService) {
  }

  ngOnInit(): void {
    this.printMovies(1);
    this.createGenreList();
  }

  printMovies(page: number) {
    this.discoverMovieService.discoverMovies(page).subscribe((data)=> {
      this.movies = data.results;
      this.curentlyPage = data.page;
      // console.log(this.movies);
    });
  }

  // Paginação só funciona no discover 
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

  // Se inserir o .toLowerCase depois de original_title não funciona com letras maiúsculas
  search(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.discoverMovieService.searchMovie(value).subscribe((data)=> {
      this.allMovies = data.results;
    });

    this.movies = this.allMovies.filter((movie) => {
      return movie.original_title.includes(value);
    })
  }

  createGenreList(): void {
    this.discoverMovieService.genreList().subscribe((data)=> {
      this.listOfGenres = data.genres;
      // console.log(this.listOfGenres);
    });
  }

  pickGenre(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.discoverMovieService.pickGenre(value).subscribe((data)=> {
      this.movies = data.results;
      console.log(data);
    });

  }

  reloadPage(){
    window.location.reload()
  }
}
