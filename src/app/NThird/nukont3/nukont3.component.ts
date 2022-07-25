import { Component, OnInit } from '@angular/core';
import { SelectEndEvent } from '@progress/kendo-angular-charts';
import { suretut } from 'src/app/entities/suretut';
import { HttpClientService } from 'src/app/services/http-client.service';
import { OkumaServisi } from 'src/app/services/okumaservisi';

@Component({
  selector: 'app-nukont3',
  templateUrl: './nukont3.component.html',
  styleUrls: ['./nukont3.component.scss']
})
export class Nukont3Component implements OnInit {
  public data: any[] = [];
  categories: number[] = [];

  public transitions = false;
  public navigatorStep: number;
  public step: number | undefined;
  public min = 0;
  public max = 2000;
  
  
  constructor(private http:HttpClientService, private okuma:OkumaServisi) {
    
  
    // set the navigator ticks and labels step to prevent the axis from becoming too cluttered
    this.navigatorStep = Math.floor(this.categories.length / 10);
   // $.get("https://localhost:7046/api/Makine", (veri: any) =>{ console.log(veri)})
  }
  dataSource:suretut[] = [];

   async ngOnInit() {
   /* this.httpClientService.get<makine[]>({
      controller:"WeatherForecast"
      //fullEndPoint:"https://localhost:7071/api/WeatherForecast"
    }).subscribe(dat =>{
      console.log(dat)
    })*/
  
    const allmakine:suretut[] =
    await this.okuma.read3(3)
    const makines:suretut[] = allmakine
    
    this.dataSource = makines
    console.log("test2")
    
    
  
    
  }

  public onSelectEnd(args: SelectEndEvent): void {
    // set the axis range displayed in the main pane to the selected range
    this.min = args.from;
    this.max = args.to;

    // stop the animations
    this.transitions = false;

    // set the main axis ticks and labels step to prevent the axis from becoming too cluttered
    this.step = Math.floor((this.max - this.min) / 10);
    
  }


}