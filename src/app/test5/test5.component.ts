import { Component, OnInit } from '@angular/core';
import { suretut } from '../entities/suretut';
import { HttpClientService } from '../services/http-client.service';
import { OkumaServisi } from '../services/okumaservisi';

@Component({
    selector: 'app-test5',
    template: `
           <div class="expansionpanel-wrapper">
            <kendo-expansionpanel title="Nukon 4KW 3M" subtitle="South America">
                <div class="content">
                    <app-nukont1></app-nukont1>
                </div>
            </kendo-expansionpanel>
            <kendo-expansionpanel title="Nukon 6KW 6M" subtitle="South America">
                <div class="content">
                    <app-nukont2></app-nukont2>
                </div>
            </kendo-expansionpanel>
            <kendo-expansionpanel title="Nukon 12 KW 6M" subtitle="South America">
                <div class="content">
                    <app-nukont3></app-nukont3>
                </div>
            </kendo-expansionpanel>
            <kendo-expansionpanel title="Nukon 12 KW 3M" subtitle="South America">
                <div class="content">
                    <app-nukont4></app-nukont4>
                </div>
            </kendo-expansionpanel>
            <kendo-expansionpanel title="Nukon Rex 4KW" subtitle="South America">
                <div class="content">
                    <app-nukont5></app-nukont5>
                </div>
            </kendo-expansionpanel>
            <kendo-expansionpanel title="Nukon 8KW Extreme 5 Eksen" subtitle="South America">
                <div class="content">
                    <app-nukont6></app-nukont6>
                </div>
            </kendo-expansionpanel>
        </div>
    `,
    styles: [`
        .content {
            
        }

        .image-container {
            height: 250px;
            margin-right: 20px;
        }

        img {
            height: 100%;
        }

        .content-text {
            display: block;
            text-align: justify;
        }

        .expansionpanel-wrapper {
            max-width: 98%;
            margin: 0 auto;
        }
    `]
  })
  export class Test5Component {}