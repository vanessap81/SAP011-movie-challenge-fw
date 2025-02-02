import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/Movie';
import { Genre } from 'src/app/Genre';
import { DiscoverMovieService } from 'src/app/services/discover-movie.service';


@Component({
  selector: 'app-main-movies-details',
  templateUrl: './main-movies-details.component.html',
  styleUrls: ['./main-movies-details.component.css']
})

export class MainMoviesDetailsComponent {
  movie?: Movie
  genres: Genre[] = [];

  constructor(private discoverMovie: DiscoverMovieService, private route: ActivatedRoute) {
    this.getDetails()
  }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.discoverMovie.getItem(id).subscribe((data) => {
      this.movie = data;
      this.genres = data.genres;
      // console.log(data);
    })
  }
}
