import { Component, OnInit } from '@angular/core';
import { suretut } from '../entities/suretut';
import { HttpClientService } from '../services/http-client.service';
import { OkumaServisi } from '../services/okumaservisi';

@Component({
  selector: 'app-test11',
  template: `

    <div>ikinci tablo</div>

    <kendo-chart>
      <kendo-chart-tooltip [shared]="true"> </kendo-chart-tooltip>
      <kendo-chart-category-axis>
        <kendo-chart-category-axis-item [categories]="['A', 'B', 'C']">
        </kendo-chart-category-axis-item>
      </kendo-chart-category-axis>
      <kendo-chart-series>
        <kendo-chart-series-item name = "Kesim" [data]="this.dataSource" field="kesim" categoryField="tarih"> </kendo-chart-series-item>
        <kendo-chart-series-item name = "Aktif" [data]="this.dataSource" field = "aktif" categoryField="tarih"> </kendo-chart-series-item>
        <kendo-chart-series-item name = "Finish" [data]="this.dataSource" field = "finish" categoryField="tarih"> </kendo-chart-series-item>
        <kendo-chart-series-item name = "Duruş" [data]="this.dataSource" field = "durus" categoryField="tarih"> </kendo-chart-series-item>
        <kendo-chart-series-item name = "Erişimsiz" [data]="this.dataSource" field = "erisimsiz" categoryField="tarih"> </kendo-chart-series-item>
      </kendo-chart-series>
    </kendo-chart> 
    
    `
    ,
})
export class Test11Component implements OnInit {

  constructor(private httpclient:HttpClientService, private okuma:OkumaServisi) { }
  dataSource:suretut[] = [];
  async ngOnInit() {
    const allmakine:suretut[] =
    await this.okuma.read2(1)
    this.dataSource = allmakine
  }

  public salesData: number[] = [20, 40, 45, 30, 50];
  public purchaseData: number[] = [12, 30, 30, 45, 10];
  public categories: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri"];

}
