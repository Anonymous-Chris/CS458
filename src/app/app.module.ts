import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {AngularFireModule} from 'angularfire2';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage} from '../pages/login/login';
import { RegisterPage} from '../pages/register/register';
import { InfoPage } from '../pages/info/info';
import { NewsPage } from '../pages/news/news';
import { VideosPage } from '../pages/videos/videos';
import { HealthPage } from '../pages/health/health';
import { NepalPage } from '../pages/nepal/nepal';

import { SportsPage } from '../pages/sports/sports';
import { OthersPage } from '../pages/others/others';
import { NavigationPage} from '../pages/navigation/navigation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    InfoPage,
    NewsPage,
    VideosPage,
    NavigationPage,
    RegisterPage,
    AboutPage,
    ContactPage,
    HomePage,
    HealthPage, NepalPage, SportsPage, OthersPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    InfoPage,
    NewsPage,
    VideosPage,
    NavigationPage,
    AboutPage,HealthPage, NepalPage,SportsPage, OthersPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
