import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../classes/movie';

import { Location } from '@angular/common';

@Component({
	selector: 'app-movie-detail',
	templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {

	movie: Movie = null;

	constructor(private ms: MoviesService, private activatedRoute: ActivatedRoute, private location: Location) { }

	ngOnInit() {

		this.activatedRoute.params.map(params => params['id']).subscribe(id => {
			this.ms.getMovieDetail(id).
				subscribe(res => {
					this.movie = res;
				});

		});
	}
	goBack(): void {
		this.location.back();
	}

}
