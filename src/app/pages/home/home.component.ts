import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any;
  links = ["https://images-na.ssl-images-amazon.com/images/I/71PhjEaTZ6L._SY550_.jpg",
           "http://assets.nydailynews.com/polopoly_fs/1.3676319.1515327608!/img/httpImage/image.jpg_gen/derivatives/gallery_1200/star-wars-jedi-2017.jpg",
           "https://vignette.wikia.nocookie.net/harrypotter/images/9/99/Harry-Potter-and-the-Prisoner-of-Azkaban-movie-poster.jpg/revision/latest?cb=20141215162758"];

  constructor(private moviesService: MoviesService,
              public router: Router){

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

  ngOnInit() {
    
  }
  
  }

