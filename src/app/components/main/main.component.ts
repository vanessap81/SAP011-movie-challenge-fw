import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DiscoverMovieService } from 'src/app/services/discover-movie.service';
import { Movie } from 'src/app/Movie';
import { Genre } from 'src/app/Genre';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  @ViewChild('movieContainer') movieContainer!: ElementRef;

  movies: Movie[] = [];
  allMovies: Movie[] = [];
  listOfGenres: Genre[] = [];
  orderByValues = ['vote_count.desc', 'popularity.desc'];
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
      // console.log(this.movieContainer);
      this.movieContainer.nativeElement.scrollTo({left: 0, top: 0, behavior: 'instant'});
      // console.log(data);
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

  search(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.discoverMovieService.searchMovie(value).subscribe((data)=> {
      this.allMovies = data.results;
    });

    this.movies = this.allMovies.filter((movie) => {
      return movie.original_title.toLowerCase().includes(value);
    })
  }

  createGenreList(): void {
    this.discoverMovieService.genreList().subscribe((data)=> {
      this.listOfGenres = data.genres;
      // console.log(this.listOfGenres);
    });
  }

  pickGenre(e: Event, page: number) {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.discoverMovieService.chooseGenre(value, page).subscribe((data)=> {
      this.movies = data.results;
      this.curentlyPage = data.page;
      console.log(data);
    });
  }

  sortBy(e: Event, page: number) {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.discoverMovieService.getSortBy(value, page).subscribe((data)=> {
      this.movies = data.results;
      this.curentlyPage = data.page;
      console.log(data);
    });
  }

  reloadPage(): void {
    window.location.reload()
  }

  // scrollToTop(): void {
  //   window.scrollTo(0, 0);
  // }
}
