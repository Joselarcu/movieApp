import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../classes/movie';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  latest: Movie[];
  kids: Movie[];
  popular: Movie[];

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getLatestMovies().subscribe(data => {
      this.latest = data.results;
    });
    this.movieService.getPopularMovies().subscribe(data => {
      this.popular = data.results;

    });

    this.movieService.getKidsMovies().subscribe(data => {
      this.kids = data.results;
    });


  }

}
