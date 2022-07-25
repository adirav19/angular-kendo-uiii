import { Component, OnInit } from '@angular/core';
import { suretut } from '../entities/suretut';
import { HttpClientService } from '../services/http-client.service';
import { OkumaServisi } from '../services/okumaservisi';
/* eslint-disable @typescript-eslint/no-unused-vars */



@Component({
    selector: 'app-test8',
    template: `
   
  
    `
})
export class Test8Component implements OnInit {
  constructor(private httpclient:HttpClientService, private okuma:OkumaServisi){}
  dataSource=null;
  dataSource2 = null;
  dataSource3 = null;
   async ngOnInit() {
   /* this.httpClientService.get<makine[]>({
      controller:"WeatherForecast"
      //fullEndPoint:"https://localhost:7071/api/WeatherForecast"
    }).subscribe(dat =>{
      console.log(dat)
    })*/
    var allmakine:suretut[] =
    await this.okuma.read2(1)

    var allmakine2:suretut[]=
    await this.okuma.read2(2)

    var allmakine3:suretut[]=
    await this.okuma.read2(3)

    const makines:suretut[] = allmakine
    const makines2:suretut[] = allmakine2
    const makines3:suretut[] = allmakine3
    
    this.dataSource = makines
    this.dataSource2 = makines2
    this.dataSource3 = makines3
    console.log("test2")
  }


  
}