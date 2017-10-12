import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HomeComponent } from './components/home/home.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'detail/:id', component: MovieDetailComponent },
    { path: 'search/:text', component: MovieSearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
    
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash: true});
