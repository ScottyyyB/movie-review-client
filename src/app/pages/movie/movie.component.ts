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
  rate = 5;
  reviews: any;
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
        switch(true) {
          case (this.movie.id == 1):
            this.movie.attributes.image = this.links[0];
            return;
          case (this.movie.id == 2):
            this.movie.attributes.image = this.links[1];
            return;
          case (this.movie.id == 3):
            this.movie.attributes.image = this.links[2];
            return;
        }
        console.log(this.movie);
      });

      this.reviewService.getReviews(this.id).subscribe((data) => {
        console.log(data);
        this.reviews = data;
      });
    }

  ngOnInit() {

  }




}
