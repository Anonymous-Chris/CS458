import { Component, ViewChild } from '@angular/core';
import { IonicPage,MenuController, NavController,Slides, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',


})
export class NewsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  	slides = [
    {
      title: "Inside the head of CEO",
      image: "assets/imgs/sheryl.jpg",
    },
    {
      title: "UFC Champion",  
      image: "assets/imgs/mcgregor.jpg",
    },
    {
      title: "This is what democracy looks like",
      image: "assets/imgs/riot.jpg",
    },
    {
    	
    }

  ];
}
