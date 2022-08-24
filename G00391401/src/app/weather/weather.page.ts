import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  weather:any = [];

  constructor(private service:WeatherService) { }

  ngOnInit() {
    // pulls weather json data from website api
    this.service.GetWeatherData().subscribe( (data)=>{
      this.weather = data.current;
      console.log(this.weather);
    });
  }
}
