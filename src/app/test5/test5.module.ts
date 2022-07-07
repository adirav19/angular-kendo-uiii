import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test5Component } from './test5.component';
import { ChartsModule } from '@progress/kendo-angular-charts';



@NgModule({
  declarations: [
    Test5Component,
    
  ],
  imports: [
    CommonModule,
    ChartsModule

  ],
  exports:[Test5Component]
})
export class Test5Module { }
