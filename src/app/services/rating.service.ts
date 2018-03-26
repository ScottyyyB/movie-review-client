import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class RatingService {

  constructor(private _tokenService: Angular2TokenService) { }

  postRating(movieId, data) {
  	return this._tokenService.post(`movies/${movieId}/ratings`, data).map(data => data);
  }

}
