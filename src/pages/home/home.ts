import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

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

}

