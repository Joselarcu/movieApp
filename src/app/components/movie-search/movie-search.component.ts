import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../classes/movie';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styles: []
})
export class MovieSearchComponent implements OnInit {

  constructor(private ms: MoviesService, private activatedRoute: ActivatedRoute) { }

  movies: Movie[];

  ngOnInit() {

    this.activatedRoute.params.map(params => params['text']).subscribe(text => {
      this.ms.searchMovie(text).
      subscribe(res => {
        this.movies = res.results;
      });
    });

  }

}
