import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
//import { Camera, CameraOptions } from '@ionic-native/camera';
//import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {

  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Work in progress',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
 
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Work in progess!',
      subTitle: '......',
      buttons: ['OK']
    });
    alert.present();
  }

  }
