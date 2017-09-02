import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  email:string = '';
  password:string;

  constructor(public navCtrl: NavController) {}

  forgotPassword(){
    this.navCtrl.push(ForgotPasswordPage, {
      email: this.email
    });
  }

  signup(){
    this.navCtrl.push(SignupPage)
  }

  signin(){

  }
}
