import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test11Component } from './test11.component';
import { ChartsModule } from '@progress/kendo-angular-charts';



@NgModule({
  declarations: [
    Test11Component
  ],
  imports: [
    ChartsModule,
    CommonModule
  ],
  exports:[
    Test11Component
  ]
})
export class Test11Module { }
