import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'layout-component',
    template: `
        <div class="header">
            <h5>{{ selectedItem }} component</h5>
        </div>

        <div class="content" id="Avatar" *ngIf="selectedItem === 'Avatar'">
           
            <app-test></app-test>
        </div>

        <div class="content" id="Card" *ngIf="selectedItem === 'Card'">
            <app-nukon></app-nukon>
        </div>

        <div class="content" id="ExpansionPanel" *ngIf="selectedItem === 'ExpansionPanel'">
            <expansionpanel-component></expansionpanel-component>
            <app-test3></app-test3>
        </div>

        <div class="content" id="GridLayout" *ngIf="selectedItem === 'GridLayout'">
            <app-test4></app-test4>
        </div>

        <div class="content" id="PanelBar" *ngIf="selectedItem === 'PanelBar'">
            <panelbar-component></panelbar-component>
        </div>

        <div class="content" id="Splitter" *ngIf="selectedItem === 'Splitter'">
            <splitter-component></splitter-component>
        </div>

        <div class="content" id="StackLayout" *ngIf="selectedItem === 'StackLayout'">
            <stacklayout-component></stacklayout-component>
        </div>

        <div class="content" id="Stepper" *ngIf="selectedItem === 'Stepper'">
            <stepper-component></stepper-component>
        </div>

        <div class="content" id="TabStrip" *ngIf="selectedItem === 'TabStrip'">
            <tabstrip-component></tabstrip-component>
        </div>
        
        <div class="content" id="TileLayout" *ngIf="selectedItem === 'TileLayout'">
            <tilelayout-component></tilelayout-component>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    styles: [`
    .content {
        padding: 20px;
    }
    .header {
        padding: 20px 20px 0 20px;
        text-align: center;
    }
    `]
})
/*
export class LayoutComponent {
    @Input() public selectedItem: string
}*/
export class LayoutComponent implements OnInit {

    constructor() {
      this.ngOnInit;
      
     }
  
    ngOnInit(): void {
       
    }
  @Input()
    public selectedItem!: string; 
    
  }