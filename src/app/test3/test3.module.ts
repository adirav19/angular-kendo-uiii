import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test3Component } from './test3.component';
import { RouterModule } from '@angular/router';
import { ChartsModule } from '@progress/kendo-angular-charts';



@NgModule({
  declarations: [

  ],
  imports: [

    CommonModule,

    RouterModule.forChild([
      {path: "",component:Test3Module}
    ])
  ],
  exports:[]
})
export class Test3Module { }
