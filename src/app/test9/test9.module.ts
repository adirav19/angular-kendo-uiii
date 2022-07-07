import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test9Component } from './test9.component';
import { ChartsModule } from '@progress/kendo-angular-charts';



@NgModule({
  declarations: [
    Test9Component
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports:[Test9Component]
})
export class Test9Module { }
