import { Component, OnInit } from '@angular/core';
import { suretut } from 'src/app/entities/suretut';
import { HttpClientService } from 'src/app/services/http-client.service';
import { OkumaServisi } from 'src/app/services/okumaservisi';

@Component({
  selector: 'app-toplu',
  templateUrl: './toplu.component.html',
  styleUrls: ['./toplu.component.scss']
})
export class TopluComponent  implements OnInit {
    
  constructor(private httpclient:HttpClientService, private okuma: OkumaServisi){}
    dataKesim= null;
    dataDurus = null;
    dataAktif = null;
    dataFinish = null;
    dataErisimsiz = null;

    data2Kesim= null;
    data2Durus = null;
    data2Aktif = null;
    data2Finish = null;
    data2Erisimsiz = null;

    data3Kesim= null;
    data3Durus = null;
    data3Aktif = null;
    data3Finish = null;
    data3Erisimsiz = null;

    data4Kesim= null;
    data4Durus = null;
    data4Aktif = null;
    data4Finish = null;
    data4Erisimsiz = null;

    data5Kesim= null;
    data5Durus = null;
    data5Aktif = null;
    data5Finish = null;
    data5Erisimsiz = null;

    data6Kesim= null;
    data6Durus = null;
    data6Aktif = null;
    data6Finish = null;
    data6Erisimsiz = null;
    
   async ngOnInit() {

    const allmakine:suretut[] = await this.okuma.read2(1)
    const allmakine2:suretut[] = await this.okuma.read2(2)
    const allmakine3:suretut[] = await this.okuma.read2(3)
    const allmakine4:suretut[] = await this.okuma.read2(4)
    const allmakine5:suretut[] = await this.okuma.read2(5)
    const allmakine6:suretut[] = await this.okuma.read2(6)

    
    
    this.dataKesim = allmakine.filter(x=>x.kesim).shift().kesim
    this.dataAktif = allmakine.filter(x=>x.aktif).shift().aktif
    this.dataDurus= allmakine.filter(x=> x.durus).shift().durus
    this.dataErisimsiz = allmakine.filter(x=>x.erisimsiz).shift().erisimsiz
    this.dataFinish = allmakine.filter(x=>x.finish).shift().finish

    this.data2Kesim = allmakine2.filter(x=>x.kesim).shift().kesim
    this.data2Aktif = allmakine2.filter(x=>x.aktif).shift().aktif
    this.data2Durus= allmakine2.filter(x=> x.durus).shift().durus
    this.data2Erisimsiz = allmakine2.filter(x=>x.erisimsiz).shift().erisimsiz
    this.data2Finish = allmakine2.filter(x=>x.finish).shift().finish 

    this.data3Kesim = allmakine3.filter(x=>x.kesim).shift().kesim
    this.data3Aktif = allmakine3.filter(x=>x.aktif).shift().aktif
    this.data3Durus= allmakine3.filter(x=> x.durus).shift().durus
    this.data3Erisimsiz = allmakine3.filter(x=>x.erisimsiz).shift().erisimsiz
    this.data3Finish = allmakine3.filter(x=>x.finish).shift().finish

    this.data4Kesim = allmakine4.filter(x=>x.kesim).shift().kesim
    this.data4Aktif = allmakine4.filter(x=>x.aktif).shift().aktif
    this.data4Durus= allmakine4.filter(x=> x.durus).shift().durus
    this.data4Erisimsiz = allmakine4.filter(x=>x.erisimsiz).shift().erisimsiz
    this.data4Finish = allmakine4.filter(x=>x.finish).shift().finish

    this.data5Kesim = allmakine5.filter(x=>x.kesim).shift().kesim
    this.data5Aktif = allmakine5.filter(x=>x.aktif).shift().aktif
    this.data5Durus= allmakine5.filter(x=> x.durus).shift().durus
    this.data5Erisimsiz = allmakine5.filter(x=>x.erisimsiz).shift().erisimsiz
    this.data5Finish = allmakine5.filter(x=>x.finish).shift().finish
    

    this.data6Kesim = allmakine6.filter(x=>x.kesim).shift().kesim
    this.data6Aktif = allmakine6.filter(x=>x.aktif).shift().aktif
    this.data6Durus= allmakine6.filter(x=> x.durus).shift().durus
    this.data6Erisimsiz = allmakine6.filter(x=>x.erisimsiz).shift().erisimsiz
    this.data6Finish = allmakine6.filter(x=>x.finish).shift().finish
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