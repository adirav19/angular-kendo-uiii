import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule, SeriesLabelsContentArgs } from '@progress/kendo-angular-charts';
import { DonutComponent } from './donut.component';



@NgModule({
  declarations: [
    
  DonutComponent
  ],
  imports: [
    CommonModule,
    ChartModule
  ],
  exports:[
    DonutComponent
  ]

})
export class DonutModule { }
