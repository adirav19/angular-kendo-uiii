import { Component, OnInit } from '@angular/core';
import { suretut } from '../entities/suretut';
import { HttpClientService } from '../services/http-client.service';
import { OkumaServisi } from '../services/okumaservisi';
/* eslint-disable @typescript-eslint/no-unused-vars */

const chartDefaultV4Colors: string[] =
  ['#ff6358', '#ffd246', '#78d237', '#28b4c8', '#2d73f5', '#aa46be'];

const chartBootstrapV4Colors: string[] =
  ['#0275d8', '#5bc0de', '#5cb85c', '#f0ad4e', '#e67d4a', '#d9534f'];

const chartMaterialV4Colors: string[] =
  ['#3f51b5', '#2196f3', '#43a047', '#ffc107', '#ff5722', '#e91e63'];


@Component({
    selector: 'app-test8',
    template: `
    <div>app-test8</div>
        <kendo-chart [seriesColors]='seriesColors'>
            <kendo-chart-series>
                <kendo-chart-series-item 
                    type='line' style='smooth' [data]='this.dataSource' field="aktif" categoryField="tarih">
                </kendo-chart-series-item>
                <kendo-chart-series-item 
                    type='line' style='smooth' [data]='this.dataSource' field="finish" categoryField="tarih">
                </kendo-chart-series-item>
                <kendo-chart-series-item 
                    type='line' style='smooth' [data]='this.dataSource' field="kesim" categoryField="tarih">
                </kendo-chart-series-item>
            </kendo-chart-series>
        </kendo-chart>


        <div>mak id = 2</div>
        <kendo-chart [seriesColors]='seriesColors'>
            <kendo-chart-series>
                <kendo-chart-series-item 
                    type='line' style='smooth' [data]='this.dataSource2' field="aktif" categoryField="tarih">
                </kendo-chart-series-item>
                <kendo-chart-series-item 
                    type='line' style='smooth' [data]='this.dataSource2' field="finish" categoryField="tarih">
                </kendo-chart-series-item>
                <kendo-chart-series-item 
                    type='line' style='smooth' [data]='this.dataSource2' field="kesim" categoryField="tarih">
                </kendo-chart-series-item>
            </kendo-chart-series>
        </kendo-chart>

        <div>mak id = 3</div>
        <kendo-chart [seriesColors]='seriesColors'>
            <kendo-chart-series>
                <kendo-chart-series-item 
                    type='line' style='smooth' [data]='this.dataSource3' field="aktif" categoryField="tarih">
                </kendo-chart-series-item>
                <kendo-chart-series-item 
                    type='line' style='smooth' [data]='this.dataSource3' field="finish" categoryField="tarih">
                </kendo-chart-series-item>
                <kendo-chart-series-item 
                    type='line' style='smooth' [data]='this.dataSource3' field="kesim" categoryField="tarih">
                </kendo-chart-series-item>
            </kendo-chart-series>
        </kendo-chart>
    `
})
export class Test8Component implements OnInit {
  constructor(private httpclient:HttpClientService, private okuma:OkumaServisi){}
  dataSource:suretut[] = [];
  dataSource2:suretut[] = [];
  dataSource3:suretut[] = [];
   async ngOnInit() {
   /* this.httpClientService.get<makine[]>({
      controller:"WeatherForecast"
      //fullEndPoint:"https://localhost:7071/api/WeatherForecast"
    }).subscribe(dat =>{
      console.log(dat)
    })*/
    const allmakine:suretut[] =
    await this.okuma.read2(1)

    const allmakine2:suretut[]=
    await this.okuma.read2(2)

    const allmakine3:suretut[]=
    await this.okuma.read2(3)

    const makines:suretut[] = allmakine
    const makines2:suretut[] = allmakine2
    const makines3:suretut[] = allmakine3
    
    this.dataSource = makines
    this.dataSource2 = makines2
    this.dataSource3 = makines3
    console.log("test2")
  }
  public seriesColors: string[] = chartDefaultV4Colors;

  public series = [{
    name: 'India',
    data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
  }, {
    name: 'Russian Federation',
    data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
  }, {
    name: 'Germany',
    data: [0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995]
  }, {
    name: 'World',
    data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
  }];
}