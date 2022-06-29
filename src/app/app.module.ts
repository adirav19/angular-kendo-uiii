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
import { HttpHeaders, HttpClient, HttpClientModule } from "@angular/common/http";
import { InputsModule } from '@progress/kendo-angular-inputs';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';




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
        InputsModule
        
        

        
       
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
        Test3Component,
        Test4Component
        
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
