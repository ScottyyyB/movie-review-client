import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import 'rxjs/add/operator/map';

@Injectable()
export class ReviewService {

  constructor(private _tokenService: Angular2TokenService) { }

  postReview(movieId, data) {
  	return this._tokenService.post(`movies/${movieId}/reviews`, data).map(data => data);
  }
}
