import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';

@Component({
  selector: 'app-flashlight',
  templateUrl: './flashlight.page.html',
  styleUrls: ['./flashlight.page.scss'],
})
export class FlashlightPage implements OnInit {
  lightStatus: string;

  constructor(private flashlight:Flashlight) { }

  ngOnInit() {
    this.checkLight();
  }

  // when run via browser, native tries calling flashlight and fails
  // interestingly, the if condition defaults to true in this scenario
  checkLight(){
    if(this.flashlight.isSwitchedOn()){
      this.lightStatus = "on";
    }
    else{
      this.lightStatus = "off";
    }
  }

  toggleLight(){
    this.flashlight.toggle();
    this.checkLight();
  }
}
