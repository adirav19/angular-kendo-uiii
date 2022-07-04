import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { LayoutComponent } from './layout.component';
import { ExpansionPanelComponent } from './expansionpanel.component';
import { PanelBarComponent } from './panelbar.component';
import { ScrollViewCardComponent } from './scrollview-card.component';
import { SplitterComponent } from './splitter.component';
import { StepperComponent } from './stepper.component';
import { TabStripComponent } from './tabstrip.component';
import { TileLayoutComponent } from './tilelayout.component';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { StackLayoutComponent } from './stacklayout.component';

import { AppComponent } from './app.component';
import { NukonComponent } from './nukon/nukon.component';
import { ChartsModule } from '@progress/kendo-angular-charts';

import 'hammerjs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { TestComponent } from './test/test.component';
import { HttpHeaders, HttpClient, HttpClientModule } from "@angular/common/http";//bu modul direk 
//yazılmalıdır ng add ile falan bulunamaz bunu kopyala yapıştır sadece.
import { InputsModule } from '@progress/kendo-angular-inputs';

import { Test4Module } from './test4/test4.module';
import { Test3Module } from './test3/test3.module';
import { DonutModule } from './donut/donut.module';
import { SeriesLabelsContentArgs } from '@progress/kendo-angular-charts';

//I keep the new line
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    ScrollViewModule,
    FormsModule,
    CommonModule,
    LayoutModule,
    ChartsModule,
    DropDownsModule,
    HttpClientModule,
    InputsModule,
    ButtonsModule,
    InputsModule,
    Test4Module,
    Test3Module,
    DonutModule
    

  ],
  declarations: [
    AppComponent,
    ExpansionPanelComponent,
    LayoutComponent,
    PanelBarComponent,
    ScrollViewCardComponent,
    SplitterComponent,
    StackLayoutComponent,
    StepperComponent,
    TabStripComponent,
    TileLayoutComponent,
    NukonComponent,
    TestComponent,
    
    
  ],
  bootstrap: [AppComponent],
  providers:[
    {
      provide:"baseUrl",
      useValue:"https://localhost:7046/api",
      multi: true
      //lişnk değişiminin kolay sağlanabilemsi
      //adına burda tanımladık.
    }
   ]
})
export class AppModule {
}
