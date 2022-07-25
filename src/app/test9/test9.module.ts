import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test9Component } from './test9.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout';



@NgModule({
  declarations: [
    Test9Component
  ],
  imports: [
    CommonModule,
    ChartsModule,
    CommonModule,
   BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InputsModule,
        LabelModule,
        ButtonsModule,
        IconsModule,
        LayoutModule,
        DropDownsModule
  ],
  exports:[Test9Component]
})
export class Test9Module { }
