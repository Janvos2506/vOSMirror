import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Weather} from './Weather';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  apiURL: string;
  forecast: Weather;
  icon: string;

  constructor(private http: HttpClient) {
    this.apiURL  = 'http://api.openweathermap.org/data/2.5/weather?q=Heteren&appid=ecd55179a46eecb3b462ac5d39337d5b';
  }

  ngOnInit() {
    this.getWeather();
    setInterval(() => {
      this.getWeather();
    }, 30000);
  }

  getWeather() {
    this.http.get<Weather>(this.apiURL).subscribe(data => {
      this.forecast = <Weather>data;
      this.forecast.main.temp = Math.round( (this.forecast.main.temp - 274.15) * 10 ) / 10;
      switch (this.forecast.weather[0].description) {
        case ('light rain'):
          this.icon = 'wi-showers';
          break;

        case ('moderate rain'):
          this.icon = 'wi-rain';
          break;

        case ('overcast clouds'):
          this.icon = 'wi-cloudy';
          break;

        case ('broken clouds'):
          this.icon = 'wi-cloud';
          break;

      }
    });
  }


}
