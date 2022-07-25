import { Component, OnInit } from '@angular/core';
import { suretut } from 'src/app/entities/suretut';
import { HttpClientService } from 'src/app/services/http-client.service';
import { OkumaServisi } from 'src/app/services/okumaservisi';

@Component({
  selector: 'app-nukon6',
  templateUrl: './nukon6.component.html',
  styleUrls: ['./nukon6.component.scss']
})
export class Nukon6Component implements OnInit {

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
    await this.okuma.read2(6)

    const allmakine2:suretut[]=
    await this.okuma.read2(6)

    const allmakine3:suretut[]=
    await this.okuma.read2(6)

    const makines:suretut[] = allmakine
    const makines2:suretut[] = allmakine2
    const makines3:suretut[] = allmakine3
    
    this.dataSource = makines
    this.dataSource2 = makines2
    this.dataSource3 = makines3

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
}
