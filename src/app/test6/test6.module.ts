import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test6Component } from './test6.component';
import { ChartsModule } from '@progress/kendo-angular-charts';



@NgModule({
  declarations: [
    Test6Component
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports:[Test6Component]
})
export class Test6Module { }
