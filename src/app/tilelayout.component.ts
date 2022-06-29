import { Component } from '@angular/core';

@Component({
    selector: 'tilelayout-component',
    template: `
        <kendo-tilelayout [columns]="2" autoFlow="none" [reorderable]="true">
            <kendo-tilelayout-item title="Tile 1">
                <kendo-tilelayout-item-body>
                    {{ firstTileContent }}
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item title="Tile 2">
                <kendo-tilelayout-item-body>
                    {{ secondTileContent }}
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item title="Tile 3">
                <kendo-tilelayout-item-body>
                    {{ secondTileContent }}
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item title="Tile 4">
                <kendo-tilelayout-item-body>
                    {{ fourthTileContent }}
                    
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>
        </kendo-tilelayout>
        <kendo-tilelayout [columns]="2" autoFlow="none" [reorderable]="true">
            <kendo-tilelayout-item title="Tile 1">
                <kendo-tilelayout-item-body>
                    {{ firstTileContent }}
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item title="Tile 2">
                <kendo-tilelayout-item-body>
                    {{ secondTileContent }}
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item title="Tile 3">
                <kendo-tilelayout-item-body>
                    {{ secondTileContent }}
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>

            <kendo-tilelayout-item title="Tile 4">
                <kendo-tilelayout-item-body>
                    {{ fourthTileContent }}
                    
                </kendo-tilelayout-item-body>
            </kendo-tilelayout-item>
        </kendo-tilelayout>
    `
})
export class TileLayoutComponent {
    public firstTileContent = `Reactive Netscape cherry pick domain contribution lazy Edge program.
        Quick sort modern bundle incognito Cloudfront views CLI Safari UX.`;
    public secondTileContent = `Lazy reflog freelancer Dijkstra directed acyclic graph concurrent uglify concurrency Safari.
        Interface MacBook coding idiosyncratic contexts package manager yarn hashtable concurrent homebrew.`;
    public thirdTileContent = `Senior-engineer Edge backend UI subclass tech debt duck typing merge sort lazy.
        Asynchronous dependency injection engineer tree shaking lang architecture Linux infrastructure queue off-by-one error.`;
    public fourthTileContent = `Infrastructure tl;dr spy data store remote procedure call bootcamp pairing child keycaps.
        Grep kernel contribute UI casting composition over inheritance remote minification void.
        
        `;
}
