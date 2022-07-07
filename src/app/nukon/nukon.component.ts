import { Component, OnInit } from '@angular/core';
import { LineStyle } from '@progress/kendo-angular-charts';
import { makine } from '../entities/makine';
import { suretut } from '../entities/suretut';
import { HttpClientService } from '../services/http-client.service';
import { OkumaServisi } from '../services/okumaservisi';
declare var $:any

@Component({
  
    selector: 'app-nukon',
    template: `
    <div>app-nukon</div>
      <kendo-dropdownlist [data]="['normal', 'step', 'smooth']" [(ngModel)]="style">
      </kendo-dropdownlist>
      <kendo-chart>
        <kendo-chart-series>
          <kendo-chart-series-item [style]="style" type="line"
              [data]="this.dataSource"
              field = "aktif"
              [markers]="{ visible: false }">
          </kendo-chart-series-item>
        </kendo-chart-series>
      </kendo-chart>
    `
    
})
export class NukonComponent implements OnInit{
  constructor(private http:HttpClientService,private okuma:OkumaServisi) { }
  
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
  public style: LineStyle = 'normal';
  
    
    
}
