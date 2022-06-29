import { Component } from '@angular/core';

@Component({
    selector: 'stacklayout-component',
    template: `
        <div class="example-wrapper">
            <kendo-stacklayout orientation="vertical" [align]="{vertical: 'top'}">
                <div class="box header">Header</div>
                <kendo-stacklayout orientation="horizontal" [style.height.px]="300">
                    <div class="box nav">Navigation</div>
                    <div class="box content">Content</div>
                    <div class="box toc">TOC</div>
                </kendo-stacklayout>
                <div class="box footer">Footer</div>
            </kendo-stacklayout>
        </div>
    `,
    styles: [`
        .box {
            padding: 4px;
            text-align: center;
            vertical-align: center;
        }
        .header { background-color: #fae47a; }
        .nav { background-color: #fbd17f; }
        .content { background-color: #f5bf8b; }
        .toc { background-color: #ebaa79; }
        .footer { background-color: #e39a6a; }
    ` ]
})
export class StackLayoutComponent {}
