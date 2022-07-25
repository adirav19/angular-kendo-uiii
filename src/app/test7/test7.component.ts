import { Component, OnInit } from '@angular/core';
import { SelectEvent } from '@progress/kendo-angular-charts';
import { suretut } from '../entities/suretut';
import { HttpClientService } from '../services/http-client.service';
import { OkumaServisi } from '../services/okumaservisi';


@Component({
    selector: 'app-test7',
    //templateUrl: './test7.component.html',
    template: `
    <kendo-tabstrip   >
            <kendo-tabstrip-tab title="Nukon 4 KW 3M"  [selected]="true">
                <ng-template kendoTabContent ]
                >

                
                  <app-nukonfif1></app-nukonfif1>
                    


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 6 KW 6M">
                <ng-template kendoTabContent>


                  <app-nukonfif2></app-nukonfif2>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 12 KW 6M">
                <ng-template kendoTabContent>


                  <app-nukonfif3></app-nukonfif3>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 12 KW 3M" [disabled]="false" >
                <ng-template kendoTabContent>
                

                  <app-nukonfif4></app-nukonfif4>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon Rex 4KW" [disabled]="false" >
                <ng-template kendoTabContent>


                  <app-nukonfif5></app-nukonfif5>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 8KW Extreme 5 Eksen" [disabled]="false" >
                <ng-template kendoTabContent>


                  <app-nukonfif6></app-nukonfif6>    


                </ng-template>
            </kendo-tabstrip-tab>
        </kendo-tabstrip>
    `,
    styles: [`
    kendo-tabstrip p {
        margin: 0;
        padding: 8px;

    }
    `]
})
export class Test7Component implements OnInit {
    
  constructor(private httpclient:HttpClientService, private okuma: OkumaServisi){}
    dataKesim= null;
    dataDurus = null;
    dataAktif = null;
    dataFinish = null;
    dataErisimsiz = null;
   async ngOnInit() {

    const allmakine:suretut[] = await this.okuma.read2(1)
    const allmakine2:suretut[] = await this.okuma.read2(2)
    
    
    this.dataKesim = allmakine.filter(x=>x.kesim).shift().kesim
    this.dataAktif = allmakine.filter(x=>x.aktif).shift().aktif
    this.dataDurus= allmakine.filter(x=> x.durus).shift().durus
    this.dataErisimsiz = allmakine.filter(x=>x.erisimsiz).shift().erisimsiz
    this.dataFinish = allmakine.filter(x=>x.finish).shift().finish
    
    console.log("test2")
    
  }
   
  public onTabSelect(e: SelectEvent): void {
      
    console.log(e);
}
}