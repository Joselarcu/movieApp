import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviePicture'
})
export class MoviePicturePipe implements PipeTransform {

  transform(movie: any, poster:boolean = false): string {
    let url = "http://image.tmdb.org/t/p/w300/";

    if(poster){
      return url + movie.poster_path;
    }

    if(movie.backdrop_path){
      return url + movie.backdrop_path;
    }
    else{
     if(movie.poster_path){
      return url + movie.poster_path;
     }else{
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1024px-No_image_3x4.svg.png';
     }
    }
  }

}
