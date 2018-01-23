import { Component, OnInit } from '@angular/core';
import { WeatherService} from '../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  data: any[] = [];
  
    constructor(private _weatherService: WeatherService) { }
  
    ngOnInit() {
    //   this._weatherService().data.subscribe(
    //     (data) => {this.data = data; }
    //   );
    }
  }
