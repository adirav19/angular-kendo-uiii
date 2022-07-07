import { Component, OnInit } from '@angular/core';
import { suretut } from '../entities/suretut';
import { HttpClientService } from '../services/http-client.service';
import { OkumaServisi } from '../services/okumaservisi';


@Component({
    selector: 'app-test7',
    template: `
    <div>app-test7</div>
      <kendo-chart renderAs="canvas" [pannable]="true" [zoomable]="true" [categoryAxis]="categoryAxis" [valueAxis]="valueAxis">
      
        <kendo-chart-series>
          <kendo-chart-series-item [data]="this.dataSource" field="aktif" categoryField="tarih">
          </kendo-chart-series-item>
        </kendo-chart-series>
        <kendo-chart-series>
          <kendo-chart-series-item [data]="this.dataSource" field="kesim" categoryField="saat">
          </kendo-chart-series-item>
        </kendo-chart-series>
      </kendo-chart>
    `
})
export class Test7Component implements OnInit {
    
  constructor(private httpclient:HttpClientService, private okuma: OkumaServisi){}
    dataSource:suretut[] = [];
   async ngOnInit() {
   /* this.httpClientService.get<makine[]>({
      controller:"WeatherForecast"
      //fullEndPoint:"https://localhost:7071/api/WeatherForecast"
    }).subscribe(dat =>{
      console.log(dat)
    })*/
    const allmakine:suretut[] =
    await this.okuma.read2(1)
    const makines:suretut[] = allmakine
    
    this.dataSource = makines
    console.log("test2")
  }
    
    public categoryAxis = {
        max: new Date(2000, 1, 0),
        maxDivisions: 10
    };

    public valueAxis = {
        labels: {
            format: '#.00'
        }
    };

}