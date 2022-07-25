import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { suretut } from 'src/app/entities/suretut';
import { HttpClientService } from 'src/app/services/http-client.service';
import { OkumaServisi } from 'src/app/services/okumaservisi';

@Component({
  selector: 'app-nukonf4',
  templateUrl: './nukonf4.component.html',
  styleUrls: ['./nukonf4.component.scss']
})
export class Nukonf4Component implements OnInit {

  constructor (private httpclient:HttpClientService, private okuma:OkumaServisi){}
    dataSource=null;
    dataSource2 = null;

    async ngOnInit() {
      var allmakine:suretut[] =  await this.okuma.read2(4)

      this.dataSource = allmakine.filter(x=>x.kesim).shift().kesim


    

console.log(this.dataSource2)
  
    }

}
