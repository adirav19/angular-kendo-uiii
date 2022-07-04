import { HttpClientModule } from '@angular/common/http';
import { Component, DebugNode, OnInit } from '@angular/core';
import { SeriesLabelsContentArgs } from '@progress/kendo-angular-charts';
import { makine } from '../entities/makine';
import { HttpClientService } from '../services/http-client.service';
import { OkumaServisi } from '../services/okumaservisi';

@Component({
  selector: 'app-donut',
  template:
  `
  <kendo-chart>
    <kendo-chart-series>
      <kendo-chart-series-item
          type="donut" [data]="this.dataSource"
          categoryField="machineNick" field="duruş">
        <kendo-chart-series-item-labels
          [content]="labelContent"
          color="#fff" background="none">
        </kendo-chart-series-item-labels>
      </kendo-chart-series-item>
    </kendo-chart-series>
    <kendo-chart-legend [visible]="false"></kendo-chart-legend>
  </kendo-chart>
  `

  
})
export class DonutComponent implements OnInit {

  constructor(private http:HttpClientService,private okuma:OkumaServisi) { }

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
    
  }
public data = [{
    name: 'Hydroelectric', test2: 0.9, id:1,test3:0.9
  }];

  public labelContent(e: SeriesLabelsContentArgs): string {
    return e.category;
  }

}
