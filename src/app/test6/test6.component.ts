import { Component, OnInit } from '@angular/core';
import { SeriesLabelsContentArgs } from '@progress/kendo-angular-charts';
import { suretut } from '../entities/suretut';
import { HttpClientService } from '../services/http-client.service';
import { OkumaServisi } from '../services/okumaservisi';

@Component({
    selector: 'app-test6',
    template: `
    <div>app-test6</div>
      <kendo-chart [title]="{ text: 'Average Weather Conditions' }">
        <kendo-chart-series>
            <kendo-chart-series-item type="rangeArea"
              [data]="this.dataSource" fromField="finish" toField="aktif" categoryField="tarih">
            <kendo-chart-series-item-labels-from [content]="labelContentFrom">
            </kendo-chart-series-item-labels-from>
            <kendo-chart-series-item-labels-to [content]="labelContentTo">
            </kendo-chart-series-item-labels-to>
          </kendo-chart-series-item>
        </kendo-chart-series>
        <kendo-chart-category-axis>
            <kendo-chart-category-axis-item [labels]="{ rotation: 'auto' }">
            </kendo-chart-category-axis-item>
        </kendo-chart-category-axis>
        <kendo-chart-tooltip>
          <ng-template kendoChartSeriesTooltipTemplate let-value="value">
            ortalama en düşük : {{ value.from }} °C <br>
            ortalama en yüksek : {{ value.to }} °C"
          </ng-template>
        </kendo-chart-tooltip>
      </kendo-chart>
    `
  })
  export class Test6Component implements OnInit {
    
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
    public labelContentFrom(e: SeriesLabelsContentArgs): string {
        return `${ e.value.from } °C`;
    }

    public labelContentTo(e: SeriesLabelsContentArgs): string {
        return `${ e.value.to } °C`;
    }
  }