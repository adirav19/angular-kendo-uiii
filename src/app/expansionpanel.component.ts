import { Component } from '@angular/core';

@Component({
    selector: 'expansionpanel-component',
    template: `
        <div class="expansionpanel-wrapper">
            <kendo-expansionpanel title="Brazil" subtitle="South America">
                <div class="content">
                    <app-nukon1></app-nukon1>
                </div>
            </kendo-expansionpanel>
            <kendo-expansionpanel title="Brazil" subtitle="South America">
                <div class="content">
                    <app-nukon2></app-nukon2>
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
export class ExpansionPanelComponent {}
