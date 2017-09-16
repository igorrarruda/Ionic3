import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

//Services
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { Facebook } from '@ionic-native/facebook';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  email: string = '';
  password: string;

  constructor(
    public navCtrl: NavController,
    private api: AuthenticationProvider,
    private fb: Facebook
  ) { }

  forgotPassword() {
    this.navCtrl.push(ForgotPasswordPage, {
      email: this.email
    });
  }

  signup() {
    this.navCtrl.push(SignupPage)
  }

  signin() {
    this.api.login(this.email.trim().toLowerCase(), this.password)
      .then(dado => {
        this.navCtrl.setRoot(HomePage, {}, {
          animate: true, 
          direction: 'forward'
        });
      });
  }
  
  connectFacebook() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((response) => console.log('Logged into Facebook!', response))
    .catch(e => console.log('Error logging into Facebook', e));
  }
}
