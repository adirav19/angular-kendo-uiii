import { Component, OnInit } from '@angular/core';
import { PlotBand } from '@progress/kendo-angular-charts';
import { isChanged } from '@progress/kendo-angular-common';
import { suretut } from '../entities/suretut';
import { HttpClientService } from '../services/http-client.service';
import { OkumaServisi } from '../services/okumaservisi';
interface Item {
  text: string;
  value: number;
}
@Component({
    selector: 'app-test9',
    template: `
    <div>test9</div>
    <kendo-chart [categoryAxis]="{ categories: categories }">
    <kendo-chart-title
      text="tarih"
    ></kendo-chart-title>
    <kendo-chart-legend
      position="bottom"
      orientation="horizontal"
    ></kendo-chart-legend>
    <kendo-chart-tooltip format="{0}%"></kendo-chart-tooltip>
    <kendo-chart-series>
      <kendo-chart-series-item
        *ngFor="let item of series_aktif"
        type="line"
        style="smooth"
        [data]="this.dataSource"
        [name]="item.name"
        field = "aktif"
        categoryField = "tarih"
      >
      </kendo-chart-series-item>

      <kendo-chart-series-item
        *ngFor="let item of series_kesim"
        type="line"
        style="smooth"
        [data]="this.dataSource"
        [name]="item.name"
        field = "kesim"
        categoryField = "tarih"
      >
      </kendo-chart-series-item>

      <kendo-chart-series-item
        *ngFor="let item of series_durus"
        type="line"
        style="smooth"
        [data]="this.dataSource"
        [name]="item.name"
        field = "durus"
        categoryField = "tarih"
      >
      </kendo-chart-series-item>

      <kendo-chart-series-item
        *ngFor="let item of series_erisimsiz"
        type="line"
        style="smooth"
        [data]="this.dataSource"
        [name]="item.name"
        field = "erisimsiz"
        categoryField = "tarih"
      >
      </kendo-chart-series-item>

    </kendo-chart-series>
  </kendo-chart>

  <br>
  <kendo-chart style="width: 300px; height: 200px;">
  <kendo-chart-series>
    <kendo-chart-series-item [data]="this.dataSource" field = "kesim"> </kendo-chart-series-item>
  </kendo-chart-series>
</kendo-chart>


<div class="example-config">Selected Value: {{ selectedValue }}</div>
<kendo-dropdownlist
  [data]="listItems"
  textField="text"
  valueField="value"
  [valuePrimitive]="true"
  [(ngModel)]="selectedValue"
>
</kendo-dropdownlist>
    `,
    styles: [
      `
        kendo-dropdownlist {
          width: 170px;
        }
      `,
    ],
  })

export class Test9Component implements OnInit{

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
    await this.okuma.read2(this.selectedValue)

    const allmakine2:suretut[]=
    await this.okuma.read2(1)

    const allmakine3:suretut[]=
    await this.okuma.read2(1)

    const makines:suretut[] = allmakine
    const makines2:suretut[] = allmakine2
    const makines3:suretut[] = allmakine3
    
    this.dataSource = makines
    this.dataSource2 = makines2
    this.dataSource3 = makines3
    console.log(this.dataSource)
  }
  //buraya çözüm bulamadım böyle kaldı
  public series_kesim  = [
    {
      name: "kesim" 
    },
  ];
  public series_erisimsiz  = [
    {
      name: "erisimsiz" 
    },
  ];
  public series_durus  = [
    {
      name: "durus" 
    },
  ];
  public series_aktif = [
    {
      name: "aktif"
    }
    
    /*{
      name: "Germany",
      data: [
        0.01, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.69, 2.995,
      ],
    },
    {
      name: "World",
      data: [
        1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727,
      ],
    },*/
  ];
  public categories: number[] = [
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
  ];
  public listItems: Array<Item> = [
    { text: "birinci makine", value: 1 },
    { text: "ikinci makine", value: 2 },
    { text: "ucuncu makine", value: 3 },
    { text: "dorduncu makine", value: 4 },
    { text: "besinci makine", value: 5 },
    { text: "altinci makine", value: 6 },
  ];

  public selectedValue = 1;
  
  
}
