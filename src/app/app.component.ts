import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  closeResult: string;
  currentUser: any;
  email: string;
  emails: any;
  emailText: string;
  password: string;
  password2: string;
  password_confirmation: string;

  constructor(
  	private _tokenService: Angular2TokenService,
  	private modalService: NgbModal,
    private userService: UserService) {
  	this._tokenService.init({
      apiBase: 'http://localhost:3002/api/v1'
  	});

    this.userService.getEmails().subscribe((data) => {
      this.emails = data;
    })
  }

  passwordMatch() {
    // console.log('password!');
    // if (this.password && this.password2 == this.password) {
    //   return this.test = 'Password Matches';
    // }
  }

  passwordLengthChecker() {
      // console.log('key up boi!');
      // if (this.password && this.password.length > 7) {
      //   return true
      // } else {
      //   return false;
      // }
  }

  emailChecker() {
    // if (this.emails.includes(this.email)) {
    //   console.log('taken');
    //   return false;
    // } else {
    //   console.log('available');
    //    return true;
    //  }
  }

  login(credentials) {
  	this._tokenService
  		.signIn(credentials)
  		.subscribe(
  			res => {console.log(res), this.currentUser = res.json().data},
  			error => console.error(error)
  		);
  }

  logout() {
  	this._tokenService
  		.signOut()
  		.subscribe(
  			res => {console.log(res), this.currentUser = undefined}, 
  			error => console.error(error));
  }

  signUp(credentials) {
    this._tokenService
      .registerAccount(credentials)
      .subscribe(
        res => {console.log(res), this.currentUser = res.json().data},
        error => console.error(error)
      );
  }


  open(content) {
  	this.modalService.open(content).result.then((result) => {
    		if (result == 'login') {
    			this.login({ email: this.email, password: this.password })
    		}
        if (result == 'register') {
          this.signUp(
            { email: this.email, password: this.password, password_confirmation: this.password2 })
        }
  	});
  }


  signupPopup() {
  	console.log('Sign Up clicked!');
  }
}
