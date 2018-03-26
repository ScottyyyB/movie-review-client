import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class MoviesService {

  constructor(private _tokenService: Angular2TokenService) {}

  getMovies() {
  	return this._tokenService.get('movies').map(res => res.json());
  }

  getMovie(id) {
  	return this._tokenService.get(`movies/${id}`).map(res => res.json());
  }
}
