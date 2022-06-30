import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NukonComponent } from './nukon.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "",component:NukonComponent}
    ])
  ],
  exports:[
    
  ]
})
export class NukonModule { }
