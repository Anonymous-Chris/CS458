import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {RegisterPage} from '../register/register';
import {InfoPage} from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  @ViewChild('username') uname;
  @ViewChild('password') password;


  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
  
  }

 showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Alert!',
      subTitle: 'The app is not yet completed. You have to wait!',
      buttons: ['OK']
    }); 
    alert.present();
  }

  signIn(){
    this.navCtrl.push(LoginPage);
  }

  register(){
    this.navCtrl.push(InfoPage);
  }
}

