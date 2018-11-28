import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { HealthPage } from '../health/health';
import { NepalPage } from '../nepal/nepal';
import { NewsPage } from '../news/news';
import { HomePage } from '../home/home';
import { SportsPage } from '../sports/sports';
import { VideosPage } from '../videos/videos';


@Component({
  templateUrl: 'navigation.html',
})

	export class NavigationPage {
  	items = [];

  	constructor(public nav: NavController) {
   	 this.items = [
      {
        'title': 'Health',
        'icon': 'medkit',
        'color': '#CE6296'
      },
      {
        'title': 'Nepal',
        'icon': 'home',
        'color': '#CE6296'
      },
      
      {
        'title': 'Olemiss',
        'icon': 'american-football',
        'color': '#CE6296'
        },
    
      {
        'title': 'Sports',
        'icon': 'football',
        'color': '#CE6296'
      },
      {
        'title': 'Videos',
        'icon': 'videocam',
        'color': '#CE6296'
      },
      {
        'title': 'Others',
        'icon': 'O',
        'color': '#CE6296'
      },
    ]
  }
  loadHealth(){
  this.nav.push(HealthPage);
  }
  loadNepal(){
  this.nav.push(NepalPage);
  }

  
  loadSports(){
  this.nav.push(SportsPage);
  }
  loadVideos(){
  this.nav.push(VideosPage);
  }

  loadOthers(){
  this.nav.push(NewsPage);
  }

  logOut(){
  this.nav.push(HomePage);
  }

}
