import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test4Component } from './test4.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { RouterModule } from '@angular/router';
declare var $:any


@NgModule({
  declarations: [
    Test4Component
  ],
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      {path: "",component:Test4Component}
    ])
    
  ],
  exports:[Test4Component]
})
export class Test4Module {}
