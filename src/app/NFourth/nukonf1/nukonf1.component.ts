import { Component, OnInit } from '@angular/core';
import { suretut } from 'src/app/entities/suretut';
import { HttpClientService } from 'src/app/services/http-client.service';
import { OkumaServisi } from 'src/app/services/okumaservisi';

@Component({
  selector: 'app-nukonf1',
  templateUrl: './nukonf1.component.html',
  styleUrls: ['./nukonf1.component.scss']
})
export class Nukonf1Component implements OnInit {

    constructor (private httpclient:HttpClientService, private okuma:OkumaServisi){}
    dataSource=null;
    dataSource2=null;
    dataSource3 = null;

    selectedValue = null
 
   async ngOnInit() {

    var allmakine:suretut[] =  await this.okuma.read2(1)
    //var allmakine2:suretut[] = await this.okuma.read2(2)
    //var allmakine3:suretut[] = await this.okuma.read2(3)

    this.dataSource = allmakine.filter(x=> x.kesim).shift().kesim
    //this.dataSource2 = allmakine2.shift().kesim
    //this.dataSource3 = allmakine3.shift().kesim
    console.log(this.dataSource)
/*
    suretut["kesim"].values()
    const allmakine:suretut["kesim"].values() =
    await (await this.okuma.read2(1)).filter(x=>x.id == 1)

   

    const allmakine3:suretut[]=
    await this.okuma.read2(3)

    const makines:suretut[] = allmakine
    
    const makines3:suretut[] = allmakine3
    
    //this.dataSource = makines.filter(x=>x.kesim.valueOf() <= 10)
    this.dataSource2 
    //this.dataSource3 = makines3.filter(x=> x.kesim)
    //console.log(this.dataSource)
    console.log(this.dataSource2)
    //console.log(this.dataSource3)*/
    //this.selectedValue = this.dataSource
  }
/*
  public pointers1 = [
    {color: "#28b4c8"}
  ];
  public pointers2 = [
    {color: "ffd246"}
  ];
  public pointers3 = [
    {color: "#78d237"}
  ];*/
  
}
