import { AfterViewInit, Component, OnDestroy } from "@angular/core";


import { SelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: "app-test3",
  template: `
  <div>app-test3</div>
  <kendo-tabstrip (tabSelect)="onTabSelect($event)"  >
            <kendo-tabstrip-tab title="Nukon 4 KW 3M"  [selected]="true">
                <ng-template kendoTabContent ]
                >

                
                  <app-nukons1></app-nukons1>
                    


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 6 KW 6M">
                <ng-template kendoTabContent>


                  <app-nukons2></app-nukons2>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 12 KW 6M">
                <ng-template kendoTabContent>


                  <app-nukons3></app-nukons3>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 12 KW 3M" [disabled]="false" >
                <ng-template kendoTabContent>
                

                  <app-nukons4></app-nukons4>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon Rex 4KW" [disabled]="false" >
                <ng-template kendoTabContent>


                  <app-nukons5></app-nukons5>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 8KW Extreme 5 Eksen" [disabled]="false" >
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
 /*constructor(){}
  public selectedd=0
    public selected=0
  ngAfterViewInit(): void {
    setInterval(() => {
            
      if(this.selected == this.selectedd){
        this.selected = this.selectedd+1
        this.selectedd = this.selected
        if(this.selected == 4){
            this.selectedd = 0
            this.selected= 0
        }
      }
    }, 3000);
  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }*/
  public onTabSelect(e: SelectEvent): void {
      
      console.log(e);
  }
}