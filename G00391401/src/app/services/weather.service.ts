import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  GetWeatherData():Observable<any>{
    return this.http.get("http://api.weatherapi.com/v1/current.json?key=3f5d19bdf1d845a3a10230250222308&q=Galway&aqi=no");
  }
}
