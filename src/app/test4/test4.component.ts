import { Component, OnInit } from '@angular/core';
import { SelectEndEvent } from '@progress/kendo-angular-charts';
import { makine } from '../entities/makine';
import { HttpClientService } from '../services/http-client.service';
import { OkumaServisi } from '../services/okumaservisi';
declare var $:any

@Component({
  selector: 'app-test4',
  template: `
        <kendo-chart (selectEnd)="onSelectEnd($event)" [transitions]="transitions"
            [categoryAxis]="[{
              categories: categories, min: min, max: max,
              labels: { step: step }, majorGridLines: { step: step }, majorTicks: { step: step }
            }, {
              categories: categories, name: 'navigatorAxis',
              labels: { step: navigatorStep }, majorGridLines: { step: navigatorStep }, majorTicks: { step: navigatorStep },
              pane: 'navigator', select: { from: min, to: max } }]"
            [valueAxis]="[{}, { name: 'valueNavigatorAxis', pane: 'navigator' }]"
            [panes]="[{}, { name: 'navigator', height: 100 }]">
            <kendo-chart-series>
                <kendo-chart-series-item type="line" style="smooth" [data]="data" [markers]="{ visible: false }">
                </kendo-chart-series-item>
                <kendo-chart-series-item type="area" style="smooth" [data]="data" axis="valueNavigatorAxis" categoryAxis="navigatorAxis">
                </kendo-chart-series-item>
            </kendo-chart-series>
        </kendo-chart>
    `
})


export class Test4Component implements OnInit {
  
  public data: any[] = [];
  categories: number[] = [];

  public transitions = false;
  public navigatorStep: number;
  public step: number | undefined;
  public min = 0;
  public max = 20;
  
  
  constructor(private http:HttpClientService, private okuma:OkumaServisi) {
    
    const startYear = 2000;
    for (let i = 0; i < 200; i++) {
      this.categories.push(startYear + i);
      this.data.push(Math.floor(Math.random() * 200));
    }
    
    // set the navigator ticks and labels step to prevent the axis from becoming too cluttered
    this.navigatorStep = Math.floor(this.categories.length / 10);
   // $.get("https://localhost:7046/api/Makine", (veri: any) =>{ console.log(veri)})
  }
  dataSource = null;
   async ngOnInit() {
   /* this.httpClientService.get<makine[]>({
      controller:"WeatherForecast"
      //fullEndPoint:"https://localhost:7071/api/WeatherForecast"
    }).subscribe(dat =>{
      console.log(dat)
    })*/
    const allmakine:makine[] =
    await this.okuma.read1(()=>console.log("test2"))
     
    this.dataSource = allmakine
    console.log(this.dataSource)
    
    const start = this.dataSource.BaslangicW
    
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
