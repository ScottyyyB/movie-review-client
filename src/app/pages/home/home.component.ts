import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movie: any;	

  constructor(private moviesService: MoviesService) {
  	this.moviesService.getMovies().subscribe(({data}) => {
  		console.log(data);
  	})
  }

  ngOnInit() {
  }
  
  }

