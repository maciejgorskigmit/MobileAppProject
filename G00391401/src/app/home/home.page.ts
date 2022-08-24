import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  username: string;

  constructor(private navControl:NavController, private storage: Storage) {}

  ngOnInit() {
  }

  // async method checks for username already in storage
  async ionViewWillEnter() {
    await this.storage.create();
    this.username = await this.storage.get('status');
  }

  updateName(){
    this.navControl.navigateForward('/username');
  }

  openFlashlight(){
    this.navControl.navigateForward('/flashlight');
  }

  openWeather(){
    this.navControl.navigateForward('/weather');
  }

}