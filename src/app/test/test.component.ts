import { Component } from "@angular/core";

import { mockData, CovidData } from "./covid-data";
import { SelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: "app-test",
  template: `
    <kendo-tabstrip (tabSelect)="onTabSelect($event)">
            <kendo-tabstrip-tab title="Nukon 4 KW 3M" [selected]="true">
                <ng-template kendoTabContent>


                    <app-nukon1></app-nukon1>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 6 KW 6M">
                <ng-template kendoTabContent>


                    <app-nukon2></app-nukon2>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 12 KW 6M">
                <ng-template kendoTabContent>


                    <app-nukon3></app-nukon3>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 12 KW 3M" [disabled]="false" >
                <ng-template kendoTabContent>
                

                    <app-nukon4></app-nukon4>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon Rex 4KW" [disabled]="false" >
                <ng-template kendoTabContent>


                    <app-nukon5></app-nukon5>


                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Nukon 8KW Extreme 5 Eksen" [disabled]="false" >
                <ng-template kendoTabContent>


                    <app-nukon6></app-nukon6>


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
export class TestComponent {
  public onTabSelect(e: SelectEvent): void {
      console.log(e);
      
  }
}
