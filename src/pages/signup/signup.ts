import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = {name:'', email:'', confirmEmail:'',password:'',confirmPassword:''}

  submitted = false;

  constructor(public navCtrl: NavController) {
    console.log(this.user);
  }

  onSubmit(){

  }

  saveUser(){

  }

  back(){
    this.navCtrl.pop();
  }

}
