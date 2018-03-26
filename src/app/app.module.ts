import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { Angular2TokenService } from 'angular2-token';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesService } from './services/movies.service';
import { RatingService } from './services/rating.service';
import { UserService } from './services/user.service';
import { ReviewService } from './services/review.service';
import { MovieComponent } from './pages/movie/movie.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [Angular2TokenService, MoviesService, UserService, RatingService, ReviewService, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
