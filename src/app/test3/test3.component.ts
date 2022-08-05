import { AfterViewInit, Component, OnDestroy } from "@angular/core";


import { SelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: "app-test3",
  template: `
  <div>app-test3</div>
  <kendo-tabstrip (tabSelect)="onTabSelect($event)"  >
            <kendo-tabstrip-tab title="Nukon 4 KW 3M" *ngIf="test == 0"  [selected]="true" >
                <ng-template kendoTabContent ]
                >

                
                  <app-nukons1></app-nukons1>
                    


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 6 KW 6M" *ngIf="test == 1"  [selected]="true">
                <ng-template kendoTabContent>


                  <app-nukons2></app-nukons2>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 12 KW 6M" *ngIf="test == 2"  [selected]="true">
                <ng-template kendoTabContent>


                  <app-nukons3></app-nukons3>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 12 KW 3M" [disabled]="false"  *ngIf="test == 3"  [selected]="true" >
                <ng-template kendoTabContent>
                

                  <app-nukons4></app-nukons4>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon Rex 4KW" [disabled]="false" *ngIf="test == 4"  [selected]="true">
                <ng-template kendoTabContent>


                  <app-nukons5></app-nukons5>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 8KW Extreme 5 Eksen" *ngIf="test == 5"  [selected]="true" >
                <ng-template kendoTabContent>


                  <app-nukons6></app-nukons6>    


                </ng-template>
            </kendo-tabstrip-tab>
        </kendo-tabstrip>
    `,
    styles: [`
    kendo-tabstrip p {
        margin: 0;
        padding: 8px;
    }
    `],
})
export class Test3Component  {
  public selected = 0;
  public selectedd = 0;
  public test = 0;
  
  public onTabSelect(e:SelectEvent): void {
     
  }

  
  constructor(){
      setInterval(() => {
          
          if(this.selected >=0){
            this.test++
            if(this.test == 5){
                this.test=0
            }
          }
          
          
          console.log(this.test)
        }, 9000); 

  }

ngOnInit(): void {

}

}