import { Injectable } from '@angular/core';

import { Jsonp, Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MoviesService {

  private apiKey: string = "1e09b66626448aa42937983bf4a2712c";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private jsonp: Jsonp) { }

  searchMovie(text: string) {

    let url = `${this.urlMoviedb}/search/movie?query=${text}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json());
  }

  getPopularMovies() {
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map(res => res.json());

  }

  getLatestMovies(){

    let date = new Date();

    let postDate = new Date(date.getMonth()+1);
 
    var date1 = date.getFullYear() + "-"+ (date.getMonth()+1) + "-" +0+ date.getDay();
    var date2= postDate.getFullYear() + "-"+ (postDate.getMonth()+1) + "-" +0+ postDate.getDay();
 
    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${date1}&primary_release_date.lte=2017-10-22&api_key=${this.apiKey}&language=es&region=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => res.json());
  }

  getKidsMovies(){
    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => res.json());
  
  }

  getMovieDetail(id:number){
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}&language=es-ES&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => res.json());
  }

  

}
