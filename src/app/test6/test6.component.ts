import { Component, OnInit } from '@angular/core';
export interface User {
  age: number;
}
@Component({
    selector: 'app-test6',
    template: `
      <kendo-splitter orientation="vertical" style="height: 400px;">
            <kendo-splitter-pane>
                <kendo-splitter>
                <kendo-splitter-pane [collapsible]="true" size="30%">
                    <div class="pane-content">
                    
                    <app-nukonf1></app-nukonf1>
                    </div>
                </kendo-splitter-pane>
                <kendo-splitter-pane>
                    <div class="pane-content">
                    
                    <app-nukonf2></app-nukonf2>
                    </div>
                </kendo-splitter-pane>
                <kendo-splitter-pane [collapsible]="true" size="30%">
                    <div class="pane-content">
                    
                    
                    <app-nukonf3></app-nukonf3>
                    </div>
                </kendo-splitter-pane>
                </kendo-splitter>
            </kendo-splitter-pane>
         
        </kendo-splitter>
        <kendo-splitter style="height: 400px;">
            <kendo-splitter-pane>
                <kendo-splitter>
                <kendo-splitter-pane [collapsible]="true" size="30%">
                    <div class="pane-content">
                    
                    <app-nukonf4></app-nukonf4>
                    </div>
                </kendo-splitter-pane>
                <kendo-splitter-pane>
                    <div class="pane-content">
                    
                    <app-nukonf5></app-nukonf5>
                    </div>
                </kendo-splitter-pane>
                <kendo-splitter-pane [collapsible]="true" size="30%">
                    <div class="pane-content">
                    
                    
                    <app-nukonf6></app-nukonf6>
                    </div>
                </kendo-splitter-pane>
                </kendo-splitter>
            </kendo-splitter-pane>
         
        </kendo-splitter>
    `,
    styles: [`
    .pane-content {
        padding: 0 10px;
    }
    h3 {
        font-size: 1.2em;
        margin: 10px 0;
        padding: 0;
    }
    p {
        margin: 0;
        padding: 0;
    }
    `]
})
export class Test6Component { }
