import { Component, OnInit } from '@angular/core';
import { suretut } from '../entities/suretut';
import { HttpClientService } from '../services/http-client.service';
import { OkumaServisi } from '../services/okumaservisi';

@Component({
    selector: 'app-test5',
    template: `
    <div>app-test5</div>
      <kendo-chart>
        <kendo-chart-title text="Units sold"></kendo-chart-title>

        <kendo-chart-category-axis>
            <kendo-chart-category-axis-item
                [categories]="this.dataSource"
                [title]="{ text: 'Months' }">
            </kendo-chart-category-axis-item>
        </kendo-chart-category-axis>

        <kendo-chart-series-defaults [highlight]="{ inactiveOpacity: 0.1 }">
        </kendo-chart-series-defaults>

        <kendo-chart-series>
          <kendo-chart-series-item type="area" [data]="this.dataSource" field = "aktif" categoryField="tarih">
          </kendo-chart-series-item>
          <kendo-chart-series-item type="area" [data]="this.dataSource" field = "durus" categoryField="tarih">
          </kendo-chart-series-item>
          <kendo-chart-series-item type="area" [data]="this.dataSource" field = "kesim" categoryField="tarih">
          </kendo-chart-series-item>
        </kendo-chart-series>
      </kendo-chart>
    `
  })
  export class Test5Component implements OnInit {
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
   }