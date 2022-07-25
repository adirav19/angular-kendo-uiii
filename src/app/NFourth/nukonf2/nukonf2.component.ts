import { Component, OnInit } from '@angular/core';
import { suretut } from 'src/app/entities/suretut';
import { HttpClientService } from 'src/app/services/http-client.service';
import { OkumaServisi } from 'src/app/services/okumaservisi';

@Component({
  selector: 'app-nukonf2',
  templateUrl: './nukonf2.component.html',
  styleUrls: ['./nukonf2.component.scss']
})
export class Nukonf2Component implements OnInit {

  constructor (private httpclient:HttpClientService, private okuma:OkumaServisi){}
    dataSource=null;

    async ngOnInit() {
      var allmakine:suretut[] =  await this.okuma.read2(2)
      this.dataSource = allmakine.filter(x=>x.kesim).shift().kesim
      console.log(this.dataSource)
  
    }

}
