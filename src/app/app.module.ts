import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LabelModule } from "@progress/kendo-angular-label";
import { AppComponent } from './app.component';
import { ChartsModule } from '@progress/kendo-angular-charts';

import 'hammerjs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { TestComponent } from './test/test.component';
import { HttpHeaders, HttpClient, HttpClientModule } from "@angular/common/http";//bu modul direk 
//yazılmalıdır ng add ile falan bulunamaz bunu kopyala yapıştır sadece.
import { InputsModule } from '@progress/kendo-angular-inputs';


import { Test3Module } from './test3/test3.module';
import { Test5Module } from './test5/test5.module';
import { Test6Module } from './test6/test6.module';
import { Test7Module } from './test7/test7.module';
import { Test8Module } from './test8/test8.module';
import { Test9Module } from './test9/test9.module';
import { Test10Module } from './test10/test10.module';
import { Test11Module } from './test11/test11.module';
import { ScrollviewComponent } from './scrollview.component';
import { IconsModule } from '@progress/kendo-angular-icons';
import { Nukon1Component } from './NFrist/nukon1/nukon1.component';
import { Nukon2Component } from './NFrist/nukon2/nukon2.component';
import { Nukon3Component } from './NFrist/nukon3/nukon3.component';
import { Nukon4Component } from './NFrist/nukon4/nukon4.component';
import { Nukon5Component } from './NFrist/nukon5/nukon5.component';
import { Nukon6Component } from './NFrist/nukon6/nukon6.component';
import { Test3Component } from './test3/test3.component';
import { Nukons1Component } from './NSecond/nukons1/nukons1.component';
import { Nukons2Component } from './NSecond/nukons2/nukons2.component';
import { Nukons3Component } from './NSecond/nukons3/nukons3.component';
import { Nukons4Component } from './NSecond/nukons4/nukons4.component';
import { Nukons5Component } from './NSecond/nukons5/nukons5.component';
import { Nukons6Component } from './NSecond/nukons6/nukons6.component';
import { Test5Component } from './test5/test5.component';
import { Nukont1Component } from './NThird/nukont1/nukont1.component';
import { Nukont6Component } from './NThird/nukont6/nukont6.component';
import { Nukont2Component } from './NThird/nukont2/nukont2.component';
import { Nukont3Component } from './NThird/nukont3/nukont3.component';
import { Nukont4Component } from './NThird/nukont4/nukont4.component';
import { Nukont5Component } from './NThird/nukont5/nukont5.component';
import { Test6Component } from './test6/test6.component';
import { Nukonf1Component } from './NFourth/nukonf1/nukonf1.component';
import { Nukonf2Component } from './NFourth/nukonf2/nukonf2.component';
import { Nukonf3Component } from './NFourth/nukonf3/nukonf3.component';
import { Nukonf4Component } from './NFourth/nukonf4/nukonf4.component';
import { Nukonf5Component } from './NFourth/nukonf5/nukonf5.component';
import { Nukonf6Component } from './NFourth/nukonf6/nukonf6.component';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { Test7Component } from './test7/test7.component';
import { Nukonfif1Component } from './NFifth/nukonfif1/nukonfif1.component';
import { Nukonfif2Component } from './NFifth/nukonfif2/nukonfif2.component';
import { Nukonfif3Component } from './NFifth/nukonfif3/nukonfif3.component';
import { Nukonfif4Component } from './NFifth/nukonfif4/nukonfif4.component';
import { Nukonfif5Component } from './NFifth/nukonfif5/nukonfif5.component';
import { Nukonfif6Component } from './NFifth/nukonfif6/nukonfif6.component';
import { TopluComponent } from './NFifth/toplu/toplu.component';

//I keep the new line
@NgModule({
  imports: [
        
        ReactiveFormsModule,
        LabelModule,
        IconsModule,
        GaugesModule,
    BrowserModule,
    BrowserAnimationsModule,
    ScrollViewModule,
    FormsModule,
    CommonModule,
    LayoutModule,
    ChartsModule,
    DropDownsModule,
    HttpClientModule,
    ButtonsModule,
    InputsModule,
    Test3Module,
    Test5Module,
    Test6Module,
    Test7Module,

    Test8Module,
    Test9Module,
    Test10Module,
    Test11Module,
    
    

    

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
    ScrollviewComponent,
    //NFİRST ELEMANLARI
    TestComponent,
    
      Nukon1Component,
      Nukon2Component,
      Nukon3Component,
      Nukon4Component,
      Nukon5Component,
      Nukon6Component,
    //NSECOND ELEMANLARI
    Test3Component,

      Nukons1Component,
      Nukons2Component,
      Nukons3Component,
      Nukons4Component,
      Nukons5Component,
      Nukons6Component,

    //NTHIRD ELEMANLARI
    Test5Component,
    
      Nukont1Component,
      Nukont2Component,
      Nukont3Component,
      Nukont4Component,
      Nukont5Component,
      Nukont6Component,

    //NFOURTH ELEMEANLARI
    Test6Component,

      Nukonf1Component,
      Nukonf2Component,
      Nukonf3Component,
      Nukonf4Component,
      Nukonf5Component,
      Nukonf6Component,

    //NFİFTH ELEMANLARI
    Test7Component,

      Nukonfif1Component,
      Nukonfif2Component,
      Nukonfif3Component,
      Nukonfif4Component,
      Nukonfif5Component,
      Nukonfif6Component,
      TopluComponent

    //NSİXTH ELEMANLARI
    
    
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
