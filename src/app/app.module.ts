import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JsonpModule } from '@angular/http';
import { MoviesService } from './services/movies.service';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { APP_ROUTING } from './app.routes';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { MoviePicturePipe } from './pipes/movie-picture.pipe';
import { MovieDisplayComponent } from './components/shared/movie-display/movie-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailComponent,
    MovieSearchComponent,
    NavbarComponent,
    MoviePicturePipe,
    MovieDisplayComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    HttpModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
