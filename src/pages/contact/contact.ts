import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	
  brightness: any;
  text:any;
  
  constructor(public navCtrl: NavController) {
  this.brightness = 50;
  this.text=50;
  }

}
