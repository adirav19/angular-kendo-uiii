import { Component, OnInit } from '@angular/core';
import { suretut } from 'src/app/entities/suretut';
import { HttpClientService } from 'src/app/services/http-client.service';
import { OkumaServisi } from 'src/app/services/okumaservisi';

@Component({
  selector: 'app-nukonfif5',
  templateUrl: './nukonfif5.component.html',
  styleUrls: ['./nukonfif5.component.scss']
})
export class Nukonfif5Component implements OnInit {
    
  constructor(private httpclient:HttpClientService, private okuma: OkumaServisi){}
    dataKesim= null;
    dataDurus = null;
    dataAktif = null;
    dataFinish = null;
    dataErisimsiz = null;
   async ngOnInit() {

    const allmakine:suretut[] = await this.okuma.read2(5)

    
    
    this.dataKesim = allmakine.filter(x=>x.kesim).shift().kesim
    this.dataAktif = allmakine.filter(x=>x.aktif).shift().aktif
    this.dataDurus= allmakine.filter(x=> x.durus).shift().durus
    this.dataErisimsiz = allmakine.filter(x=>x.erisimsiz).shift().erisimsiz
    this.dataFinish = allmakine.filter(x=>x.finish).shift().finish
    
    console.log("test2")
    
  }
  public series_kesim  = [
    {
      name: "KESİM" 
    },
  ];
  public series_erisimsiz  = [
    {
      name: "ERİŞİMSİZ" 
    },
  ];
  public series_durus  = [
    {
      name: "DURUŞ" 
    },
  ];
  public series_aktif = [
    {
      name: "AKTİF"
    }
  ];
  public series_finish  = [
    {
      name: "BİTİŞ" 
    },
  ];

}
