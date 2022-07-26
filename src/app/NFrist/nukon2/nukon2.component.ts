import { Component, OnInit } from '@angular/core';
import { SeriesLabelsContentArgs } from '@progress/kendo-angular-charts';
import { suretut } from 'src/app/entities/suretut';
import { HttpClientService } from 'src/app/services/http-client.service';
import { OkumaServisi } from 'src/app/services/okumaservisi';

@Component({
  selector: 'app-nukon2',
  templateUrl: './nukon2.component.html',
  styleUrls: ['./nukon2.component.scss']
})
export class Nukon2Component implements OnInit {
  constructor(private httpclient:HttpClientService, private okuma:OkumaServisi){}
  dataSource//bu üst tablo için 
  dataSource1//bu donut için
  dataSource2
  dataSource3
  dataSource4
  dataSource5
  dataSource6

  AltiMakineToplamKesimSn
  BuMakineOranı

  donuticin
  yuzdelikicin
  Valuer// 100le çarpıp yüzdeyi buluyozz
   async ngOnInit() {
   /* this.httpClientService.get<makine[]>({
      controller:"WeatherForecast"
      //fullEndPoint:"https://localhost:7071/api/WeatherForecast"
    }).subscribe(dat =>{
      console.log(dat)
    })*/

    
    const allmakine:suretut[] =
    await this.okuma.read2(2)
        
    const allmakine1:suretut[] =
    await this.okuma.read2(1)

    const allmakine2:suretut[]=
    await this.okuma.read2(2)

    const allmakine3:suretut[]=
    await this.okuma.read2(3)

    const allmakine4:suretut[]=
    await this.okuma.read2(4)

    const allmakine5:suretut[]=
    await this.okuma.read2(5)

    const allmakine6:suretut[]=
    await this.okuma.read2(6)


    
    this.dataSource = allmakine
    this.dataSource1=allmakine1.filter(x=>x.kesim).shift().kesim
    this.dataSource2 = allmakine2.filter(x=>x.kesim).shift().kesim
    this.dataSource3 = allmakine3.filter(x=>x.kesim).shift().kesim
    this.dataSource4 = allmakine4.filter(x=>x.kesim).shift().kesim
    this.dataSource5 = allmakine5.filter(x=>x.kesim).shift().kesim
    this.dataSource6 = allmakine6.filter(x=>x.kesim).shift().kesim

    this.AltiMakineToplamKesimSn = this.dataSource1+this.dataSource2+this.dataSource3+this.dataSource4+this.dataSource5+this.dataSource6
    this.BuMakineOranı = this.dataSource2/this.AltiMakineToplamKesimSn
     this.yuzdelikicin=1-this.BuMakineOranı
    console.log(this.BuMakineOranı)
    this.donuticin = [{kind:"BütünMakineler",share:this.yuzdelikicin},{kind:"BuMakine",share:this.BuMakineOranı}];
    this.Valuer = ((parseFloat(this.BuMakineOranı))*100).toFixed(2) //virgülden sonra 2 basamak göster
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
  ];
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
  
  public categories: number[] = [
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
  ];
  
 

  public labelContent(e: SeriesLabelsContentArgs): string {
    return e.category;
  }

  

}

