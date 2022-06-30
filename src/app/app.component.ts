import { Component, ViewEncapsulation } from '@angular/core';
import { DrawerSelectEvent } from '@progress/kendo-angular-layout';
declare var $: any
@Component({
    selector: 'app-root',
    template: `
    <div class="wrapper">
        <div class="custom-toolbar">
            <button kendoButton icon="layout" fillMode="flat" (click)="drawer.toggle()">
            <span class="mail-box">Drawer component</span>
        </button>
        </div>
        <kendo-drawer-container class="customClass">
            <kendo-drawer
                #drawer
                [items]="items"
                mode="push"
                [mini]="true"
                [expanded]="true"
                (select)="onSelect($event)"
            >
            </kendo-drawer>
            <kendo-drawer-content>
                <layout-component [selectedItem]="selected"></layout-component>
            </kendo-drawer-content>
      </kendo-drawer-container>
    </div>
    `,
    encapsulation: ViewEncapsulation.None,
    styles: [`
        html,
          body,
          #parent,
          my-app,
          .wrapper {
            margin: 0;
            padding: 0;
            border-width: 0;
            height: 100%;
          }

        html {
        overflow: hidden;
        }

        .customClass {
        flex: 1;
        overflow: auto;
        align-items: stretch;
        }

        .wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        }

        .customClass .k-drawer-content { overflow: auto }

        .custom-toolbar {
        width: 100%;
        background-color: #f6f6f6;
        line-height: 10px;
        border-bottom: inset;
        border-bottom-width: 1px;
        padding: 3px 8px;
        color: #656565;
            flex-shrink: 0;
        }
        .mail-box {
        font-weight: bold;
        font-size: 17px;
        }
    `]
})

export class AppComponent {
    
    public selected = 'Avatar';

    public items: Array<{text: string, icon: string, selected?: boolean} | {separator: boolean}> = [
        { text: 'Avatar', icon: 'k-i-user', selected: true },
        { separator: true },
        { text: 'Card', icon: 'k-i-image' },
        { separator: true },
        { text: 'ExpansionPanel', icon: 'k-i-insert-up' },
        { separator: true },
        { text: 'GridLayout', icon: 'k-i-cells-merge-vertically' },
        { separator: true },
        { text: 'PanelBar', icon: 'k-i-menu' },
        { separator: true },
        { text: 'Splitter', icon: 'k-i-arrows-resizing' },
        { separator: true },
        { text: 'StackLayout', icon: 'k-i-align-justify' },
        { separator: true },
        { text: 'Stepper', icon: 'k-i-list-numbered' },
        { separator: true },
        { text: 'TabStrip', icon: 'k-i-thumbnails-up' },
        { separator: true },
        { text: 'TileLayout', icon: 'k-i-grid' }
    ];

    public onSelect(ev: DrawerSelectEvent): void {
        this.selected = ev.item.text;
    }
    
}
