import { Component } from '@angular/core';
import { SelectEvent } from '@progress/kendo-angular-layout';

@Component({
    selector: 'tabstrip-component',
    template: `
        <kendo-tabstrip (tabSelect)="onTabSelect($event)">
            <kendo-tabstrip-tab title="test10" [selected]="true">
            <ng-template kendoTabContent>
                <app-test10></app-test10>
            </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="test8">
                <ng-template kendoTabContent>
                daha güzel bişeyler gelebilir 
                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="test6">
                <ng-template kendoTabContent>
                   daha güzel bişeyler gelebilir.
                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="test9" [disabled]="false" >
                <ng-template kendoTabContent>
                <app-test9></app-test9>
                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="test11" [disabled]="false" >
                <ng-template kendoTabContent>
                <app-test11></app-test11>
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
export class TabStripComponent {
    public onTabSelect(e: SelectEvent): void {
        console.log(e);
        
    }
}
