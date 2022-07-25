import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test10Component } from './test10.component';
import { ChartsModule } from '@progress/kendo-angular-charts';



@NgModule({
  declarations: [
    Test10Component
  ],
  imports: [
    ChartsModule,
    CommonModule
  ],
  exports:[Test10Component]
})
export class Test10Module { }
