import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireStorageModule } from 'angularfire2/storage';
//import { Camera } from '@ionic-native/camera';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage} from '../pages/login/login';
import { RegisterPage} from '../pages/register/register';
import { NewsPage } from '../pages/news/news';
import { VideosPage } from '../pages/videos/videos';
import { HealthPage } from '../pages/health/health';

import { ResetPage } from '../pages/reset/reset';
import { NepalPage } from '../pages/nepal/nepal';
import { SportsPage } from '../pages/sports/sports';
import { NavigationPage} from '../pages/navigation/navigation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ServicesAuth } from '../services/services-auth/services-auth';

var firebaseAuth = {
    apiKey: "AIzaSyCi9j3jfX1PzZVraBQmOE2Kur431_53F9E",
    authDomain: "myapps-bb4bf.firebaseapp.com",
    databaseURL: "https://myapps-bb4bf.firebaseio.com",
    projectId: "myapps-bb4bf",
    storageBucket: "myapps-bb4bf.appspot.com",
    messagingSenderId: "275984509366"
  };

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    NewsPage,
    VideosPage,
    NavigationPage,
    RegisterPage,
    AboutPage,
    HomePage, ResetPage,
    HealthPage, NepalPage, SportsPage, 
    TabsPage
  ],
  imports: [
    BrowserModule,AngularFireStorageModule,
    IonicModule.forRoot(MyApp),AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    NewsPage, ResetPage,
    VideosPage,
    NavigationPage,
    AboutPage,HealthPage, NepalPage,SportsPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen, ServicesAuth, //Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
