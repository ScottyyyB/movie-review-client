import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { RatingService } from '../../services/rating.service';
import { ReviewService } from '../../services/review.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RatingModule } from "ngx-rating";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  review = { body: undefined, rating: undefined };
  rating = 5;
  movies: any;
  links = ["https://images-na.ssl-images-amazon.com/images/I/71PhjEaTZ6L._SY550_.jpg",
           "http://assets.nydailynews.com/polopoly_fs/1.3676319.1515327608!/img/httpImage/image.jpg_gen/derivatives/gallery_1200/star-wars-jedi-2017.jpg",
           "https://vignette.wikia.nocookie.net/harrypotter/images/9/99/Harry-Potter-and-the-Prisoner-of-Azkaban-movie-poster.jpg/revision/latest?cb=20141215162758"];

  constructor(private moviesService: MoviesService,
              public router: Router,
              private modalService: NgbModal,
              public ratingService: RatingService,
              public reviewService: ReviewService  ){

  	this.moviesService.getMovies().subscribe(({data}) => {
      data.map(function(movie, index) {
        movie.attributes.image = this.links[index];
      }, this);
  	 this.movies = data; 
     console.log(this.movies);
  	})
  }

  goToMovie(id) {
    this.router.navigate([`movie/${id}`]);
  }

  test() {
    console.log(this.review);
  }


  open(content, movieId) {
    this.modalService.open(content).result.then((result) => {
      console.log(this.review);
      if (result == 'movie') { 
        this.reviewService.postReview(movieId, this.review).subscribe(
          data => {
            console.log(data);
          },
          error => console.error(error)
        );
      }
      this.review.rating = 0;
    });
  }

  ngOnInit() {
    
  }
  
  }

