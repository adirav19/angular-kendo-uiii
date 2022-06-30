import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test3Component } from './test3.component';
import { RouterModule } from '@angular/router';
import { ChartsModule } from '@progress/kendo-angular-charts';



@NgModule({
  declarations: [
    Test3Component
  ],
  imports: [

    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      {path: "",component:Test3Component}
    ])
  ],
  exports:[Test3Component]
})
export class Test3Module { }
