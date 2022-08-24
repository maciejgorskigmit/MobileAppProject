import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-username',
  templateUrl: './username.page.html',
  styleUrls: ['./username.page.scss'],
})
export class UsernamePage implements OnInit {
  username: string;

  constructor(private navControl:NavController, private storage: Storage) {}

  ngOnInit() {
  }

  // async method checks for username already in storage
  async ionViewWillEnter() {
    await this.storage.create();
    this.username = await this.storage.get('status');
  }

  // method updates username saved in storage
  async saveName() {
    await this.storage.set('status', this.username)
      .then(
        () => {
          this.navControl.navigateBack('/home')
        })
      .catch();
  }
    
}
