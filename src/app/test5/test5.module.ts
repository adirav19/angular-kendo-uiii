import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartsModule } from '@progress/kendo-angular-charts';



@NgModule({
  declarations: [

    
  ],
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      {path: "",component:Test5Module}
    ]),

  ],
  exports:[]
})
export class Test5Module { }
