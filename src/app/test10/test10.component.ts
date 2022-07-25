import { Component, OnInit } from '@angular/core';
import { PlotBand } from '@progress/kendo-angular-charts';
import { suretut } from '../entities/suretut';
import { HttpClientService } from '../services/http-client.service';
import { OkumaServisi } from '../services/okumaservisi';

@Component({
  selector: 'app-test10',
  template: `
  <div>app-test10</div>
  <kendo-chart style="height: 120px;">
      <kendo-chart-title text="Temperature [&deg;C]"></kendo-chart-title>
      <kendo-chart-series>
        <kendo-chart-series-item type="bullet" [data]="[this.dataSource,this.dataSource2]" color="#fff">
        </kendo-chart-series-item>
        <kendo-chart-category-axis>
          <kendo-chart-category-axis-item
            [majorGridLines]="hidden"
            [minorGridLines]="hidden"
          >
          </kendo-chart-category-axis-item>
        </kendo-chart-category-axis>
        <kendo-chart-value-axis>
          <kendo-chart-value-axis-item
            [majorGridLines]="hidden"
            [minorTicks]="hidden"
            [min]="-1000"
            [max]="25000"
            [plotBands]="tempPlotBands"
          >
          </kendo-chart-value-axis-item>
        </kendo-chart-value-axis>
      </kendo-chart-series>
      <kendo-chart-tooltip>
        <ng-template kendoChartSeriesTooltipTemplate let-value="value">
          Maximum: {{ value.target }} <br />
          Average: {{ value.current }}
        </ng-template>
      </kendo-chart-tooltip>
    </kendo-chart>
************---------------
    <kendo-chart style="height: 120px;">
      <kendo-chart-title text="Humidity [%]"></kendo-chart-title>
      <kendo-chart-series>
        <kendo-chart-series-item type="bullet" [data]="hum" color="#0058e9">
        </kendo-chart-series-item>
        <kendo-chart-category-axis>
          <kendo-chart-category-axis-item
            [majorGridLines]="hidden"
            [minorGridLines]="hidden"
          >
          </kendo-chart-category-axis-item>
        </kendo-chart-category-axis>
        <kendo-chart-value-axis>
          <kendo-chart-value-axis-item
            [majorGridLines]="hidden"
            [minorTicks]="hidden"
            [min]="0"
            [max]="100"
            [plotBands]="humPlotBands"
          >
          </kendo-chart-value-axis-item>
        </kendo-chart-value-axis>
      </kendo-chart-series>
      <kendo-chart-tooltip>
        <ng-template kendoChartSeriesTooltipTemplate let-value="value">
          Maximum: {{ value.target }} <br />
          Average: {{ value.current }}
        </ng-template>
      </kendo-chart-tooltip>
    </kendo-chart>
---------------------***********************************
    <kendo-chart style="height: 120px;">
      <kendo-chart-title text="Atmospheric pressure [mmHg]"></kendo-chart-title>
      <kendo-chart-series>
        <kendo-chart-series-item type="bullet" [data]="mmhg" color="#111">
        </kendo-chart-series-item>
        <kendo-chart-category-axis>
          <kendo-chart-category-axis-item
            [majorGridLines]="hidden"
            [minorGridLines]="hidden"
          >
          </kendo-chart-category-axis-item>
        </kendo-chart-category-axis>
        <kendo-chart-value-axis>
          <kendo-chart-value-axis-item
            [majorGridLines]="hidden"
            [minorTicks]="hidden"
            [min]="715"
            [max]="795"
            [plotBands]="mmhgPlotBands"
          >
          </kendo-chart-value-axis-item>
        </kendo-chart-value-axis>
      </kendo-chart-series>
      <kendo-chart-tooltip>
        <ng-template kendoChartSeriesTooltipTemplate let-value="value">
          Maximum: {{ value.target }} <br />
          Average: {{ value.current }}
        </ng-template>
      </kendo-chart-tooltip>
    </kendo-chart>
    `
})
export class Test10Component implements OnInit {

  constructor(private httpclient:HttpClientService,private okuma:OkumaServisi)
   { 

   }
   dataSource = null;
   dataSource1 = null;
   dataSource2 = null;
  async ngOnInit() {
    var allmakine:suretut[] = await this.okuma.read2(1)
    var allmakine2:suretut[]=  await this.okuma.read2(2)


    this.dataSource = allmakine.filter(x=>x.kesim).shift().kesim
    this.dataSource2 = allmakine.filter(x=>x.aktif).shift().aktif
    this.dataSource1 = allmakine2.filter(x=>x.kesim).shift().kesim
    console.log(this.dataSource)
    console.log(this.dataSource1)
    
  }
  public temp = [[this.dataSource, this.dataSource1]];
  public hidden: { visible: boolean } = { visible: true };
  public tempPlotBands: PlotBand[] = [
    {
      from: -1000,
      to: 0,
      color: "#e62325",
      opacity: 1,
    },
    {
      from: 0,
      to: 5000,
      color: "#ffc000",
      opacity: 1,
    },
    {
      from: 5000,
      to: 15000,
      color: "#37b400",
      opacity: 1,
    },
    {
      from: 15000,
      to: 25000,
      color: "#5392ff",
      opacity: 1,
    },
  ];
  public humPlotBands: PlotBand[] = [
    {
      from: 0,
      to: 33,
      color: "#ccc",
      opacity: 0.6,
    },
    {
      from: 33,
      to: 66,
      color: "#ccc",
      opacity: 0.3,
    },
  ];
  public mmhgPlotBands: PlotBand[] = [
    {
      from: 715,
      to: 752,
      color: "#ccc",
      opacity: 0.6,
    },
    {
      from: 752,
      to: 772,
      color: "#ccc",
      opacity: 0.3,
    },
  ];

  
  public hum = [[45, 60]];
  public mmhg = [[750, 762]];
}
