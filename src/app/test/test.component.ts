import {  AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";

import { SelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: "app-test",
  template: `
    <kendo-tabstrip (tabSelect)="onTabSelect($event)">
            <kendo-tabstrip-tab title="Nukon 4 KW 3M" *ngIf="test == 0"  [selected]="true">
                <ng-template kendoTabContent>


                    <app-nukon1></app-nukon1>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 6 KW 6M" *ngIf="test == 1" [selected]="true">
                <ng-template kendoTabContent>


                    <app-nukon2></app-nukon2>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 12 KW 6M" *ngIf="test == 2" [selected]="true">
                <ng-template kendoTabContent>


                    <app-nukon3></app-nukon3>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 12 KW 3M" [disabled]="false" *ngIf="test == 3" [selected]="true" >
                <ng-template kendoTabContent>
                

                    <app-nukon4></app-nukon4>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon Rex 4KW" [disabled]="false" *ngIf="test == 4" [selected]="true">
                <ng-template kendoTabContent>


                    <app-nukon5></app-nukon5>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 8KW Extreme 5 Eksen" [disabled]="false" *ngIf="test == 5" [selected]="true" id="10">
                <ng-template kendoTabContent>


                    <app-nukon6></app-nukon6>


                </ng-template>
            </kendo-tabstrip-tab>
        </kendo-tabstrip>
        <app-nukon1></app-nukon1>
    `,
    styles: [`
    kendo-tabstrip p {
        margin: 0;
        padding: 8px;
    }
    `],
})
export class TestComponent implements OnDestroy,AfterViewInit{
    public selected = 0;
    public selectedd = 0;
    public test = 0;
    private interval;
    
    public onTabSelect(e:SelectEvent): void {
       
    }
  constructor()
{  this.interval =  setInterval(() => {
            
    if(this.selected >=0){
      this.test++
      if(this.test == 5){
          this.test=0
      }
    }
    
    
    console.log(this.test)
  }, 9000); }
    public ngAfterViewInit(): void {
     
    }
    public ngOnDestroy(): void {
        clearInterval(this.interval);
    }
    

  
 
}
