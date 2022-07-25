import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClientService } from './services/http-client.service';
import { OkumaServisi } from './services/okumaservisi';

@Component({
    selector: 'layout-component',
    template: `
        <div class="header">
            <h5>{{ selectedItem }} component</h5>
        </div>

        <div class="content" id="Avatar" *ngIf="selectedItem === 'Avatar'">
           
           <!-- <app-test></app-test> klasik kullanmaya gerek yok -->
           <!--<app-test6></app-test6>-->
           <app-test></app-test>

        </div>

        <div class="content" id="Card" *ngIf="selectedItem === 'Card'">
           <!-- <app-nukon></app-nukon> elektrik işinde kullanılacak -->
           
        <app-test3></app-test3>
        
        </div>
        <div class="content" id="PanelBar" *ngIf="selectedItem === 'PanelBar'">
            <app-test5></app-test5>
        </div>

        <div class="content" id="ExpansionPanel" *ngIf="selectedItem === 'ExpansionPanel'">
        <app-test6></app-test6>
          
        </div>

        <div class="content" id="GridLayout" *ngIf="selectedItem === 'GridLayout'">
          <app-test7></app-test7>
        </div>

        

        <div class="content" id="Splitter" *ngIf="selectedItem === 'Splitter'">
            
        </div>

        <div class="content" id="StackLayout" *ngIf="selectedItem === 'StackLayout'">
       <!-- <app-test5></app-test5> kullanım alanı sınırlı  -->
            <stacklayout-component></stacklayout-component>
            
        </div>

        <div class="content" id="Stepper" *ngIf="selectedItem === 'Stepper'">
            <!-- <app-test6></app-test6> işlevini bilmiyoruz şuan için gereksiz-->
            <stepper-component></stepper-component>
        </div>

        <div class="content" id="TabStrip" *ngIf="selectedItem === 'TabStrip'">
       <!-- <app-test7></app-test7> -->
            <tabstrip-component></tabstrip-component>
        </div>
        
        <div class="content" id="TileLayout" *ngIf="selectedItem === 'TileLayout'">
       <!-- <app-test8></app-test8> -->
        <app-test9></app-test9>
        <app-test11></app-test11>
         <!--   <tilelayout-component></tilelayout-component> -->
         
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
  
    async ngOnInit() {
       
    }
  @Input()
    public selectedItem!: string; 
    
  }