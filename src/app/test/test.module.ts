import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Nukon1Component } from '../NFrist/nukon1/nukon1.component';
import { Nukon2Component } from '../NFrist/nukon2/nukon2.component';
import { Nukon3Component } from '../NFrist/nukon3/nukon3.component';
import { Nukon4Component } from '../NFrist/nukon4/nukon4.component';
import { Nukon5Component } from '../NFrist/nukon5/nukon5.component';
import { Nukon6Component } from '../NFrist/nukon6/nukon6.component';



@NgModule({
  declarations: [

  ],
  imports: [
    
    CommonModule,
    RouterModule.forChild([
      {path: "",component:TestModule}
    ]),
    
  ],
  exports:[
    
    
  ]
})
export class TestModule { }
