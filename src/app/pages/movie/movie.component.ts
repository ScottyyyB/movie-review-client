import { Component, OnInit } from '@angular/core';
import { RatingService } from '../../services/rating.service';
import { ReviewService } from '../../services/review.service';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
	id: number;
  rating = { number: undefined };
  review = { body: undefined };
  movie: any;
  links = ["https://images-na.ssl-images-amazon.com/images/I/71PhjEaTZ6L._SY550_.jpg",
           "http://assets.nydailynews.com/polopoly_fs/1.3676319.1515327608!/img/httpImage/image.jpg_gen/derivatives/gallery_1200/star-wars-jedi-2017.jpg",
           "https://vignette.wikia.nocookie.net/harrypotter/images/9/99/Harry-Potter-and-the-Prisoner-of-Azkaban-movie-poster.jpg/revision/latest?cb=20141215162758"];

  constructor(
    public homeComponent: HomeComponent,
    public moviesService: MoviesService,
    public ratingService: RatingService,
    public reviewService: ReviewService,
    public route: ActivatedRoute,
    public router: Router
    ) { 
    this.route.params.subscribe(res => this.id = res.id);
      this.moviesService.getMovie(this.id).subscribe(({data}) => {
        this.movie = data;
        console.log(this.movie);
        switch(true) {
          case (this.movie.id == 1):
            this.movie.image = this.links[0];
            return;
          case (this.movie.id == 2):
            this.movie.image = this.links[1];
            return;
          case (this.movie.id == 3):
            this.movie.image = this.links[2];
            return;
        }
        console.log(this.movie);
      });
    }

  createRating() {
    this.ratingService.postRating(this.id, this.rating).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['home'])
      },
      error => console.error(error)
    );
  }

  createReview() {
    this.reviewService.postReview(this.id, this.review).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['home']);
      },
      error => console.error(error)
    );
  }

  ngOnInit() {

  }




}
