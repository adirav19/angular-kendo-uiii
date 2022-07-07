import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test7Component } from './test7.component';
import { ChartsModule } from '@progress/kendo-angular-charts';



@NgModule({
  declarations: [
    Test7Component
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports:[
    Test7Component
  ]
})
export class Test7Module { }
