import { Component, OnInit } from '@angular/core';
import { WeatherService} from '../weather.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  data: any[] = [];
  city = 'burbank';
  weather = '';
  temp;
  maxTemp;
  minTemp;
  humidity = '';
  wind;
  clouds;

  constructor(private _weatherService: WeatherService) {
   }

  ngOnInit() {
    this._weatherService.city = this.city
    this._weatherService.data.subscribe(
      (data) => {this.data = data; }
    );
  
  }
  onclick(){
    this._weatherService.retrieveWeather(this.city);
    ( data => {
      this.humidity = data.main.humidity;
      this.temp = data.main.temp;
      this.temp = Math.floor(this.temp * (9/5) - 459.67); 
      this.maxTemp = data.main.temp_max;
      this.maxTemp = Math.floor(this.maxTemp * (9/5) - 459.67); 
      this.minTemp = data.main.temp_min;
      this.minTemp = Math.floor(this.minTemp * (9/5) - 459.67); 
      this.clouds = data.weather[0].description;
    });
  }
}