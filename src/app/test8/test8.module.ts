import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test8Component } from './test8.component';
import { ChartsModule } from '@progress/kendo-angular-charts';



@NgModule({
  declarations: [
    Test8Component
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports:[Test8Component]
})
export class Test8Module { }
