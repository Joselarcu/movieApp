import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../classes/movie';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html'
})
export class MovieDisplayComponent implements OnInit {
  

  @Input() movies: Movie[] = [];

  
  constructor() { }

  ngOnInit() {
  }

}
