import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class WeatherService {
  data: BehaviorSubject<any[]> = new BehaviorSubject([]);
  city;
  constructor(private _Httpclient: HttpClient) { }

  retrieveWeather(city: String){
    console.log(city);
    this._Httpclient.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=89a0c8e622e9d2426bdf4f05425815ed').subscribe(
      (data: any[]) => {this.data.next(data);
      console.log(data);
      }
    );
  }


}
