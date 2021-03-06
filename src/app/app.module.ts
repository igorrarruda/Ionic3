import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { BarPage } from './../pages/bar/bar';
import { ProfilePage } from './../pages/profile/profile';

//Services
import { AuthenticationProvider } from '../providers/authentication/authentication';

//Modules
import { IonicStorageModule } from '@ionic/storage';
import { UserInfoProvider } from '../providers/user-info/user-info';
import { PartnersProvider } from '../providers/partners/partners';

//Pipes
import { TruncatePipe } from './../pipes/truncate/truncate';

//Components
import { DrinkComponent } from '../components/drink/drink';

import { Facebook } from '@ionic-native/facebook';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    ForgotPasswordPage,
    TruncatePipe,
    BarPage,
    DrinkComponent,
    ProfilePage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    ForgotPasswordPage,
    BarPage,
    DrinkComponent,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthenticationProvider,
    UserInfoProvider,
    PartnersProvider,
    UserInfoProvider,
    Facebook
  ]
})
export class AppModule { }
