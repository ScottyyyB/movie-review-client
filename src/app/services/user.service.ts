import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Angular2TokenService } from 'angular2-token'; 

@Injectable()
export class UserService {

  constructor(private _tokenService: Angular2TokenService) { }

  getEmails() {
  	return this._tokenService.get('auth/emails')
  		.map(res => res.json());
  }
}
