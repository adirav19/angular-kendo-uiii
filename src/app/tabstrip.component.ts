import { Component } from '@angular/core';
import { SelectEvent } from '@progress/kendo-angular-layout';

@Component({
    selector: 'tabstrip-component',
    template: `
        <kendo-tabstrip (tabSelect)="onTabSelect($event)">
            <kendo-tabstrip-tab title="Paris" [selected]="true">
            <ng-template kendoTabContent>
                <p>
                    Paris is the capital and most populous city of France. It has an
                    area of 105 square kilometres (41 square miles) and a population in
                    2013 of 2,229,621 within its administrative limits. The city is both
                    a commune and department, and forms the centre and headquarters of
                    the Île-de-France, or Paris Region, which has an area of 12,012
                    square kilometres (4,638 square miles) and a population in 2014 of
                    12,005,077, comprising 18.2 percent of the population of France.
                </p>
            </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="New York City">
                <ng-template kendoTabContent>
                <p>
                    The City of New York, often called New York City or simply New York,
                    is the most populous city in the United States. With an estimated
                    2015 population of 8,550,405 distributed over a land area of just
                    305 square miles (790 km2), New York City is also the most densely
                    populated major city in the United States. Located at the southern
                    tip of the state of New York, the city is the center of the New York
                    metropolitan area, one of the most populous urban agglomerations in
                    the world.
                </p>
                <p>
                    A global power city, New York City exerts a significant impact upon
                    commerce, finance, media, art, fashion, research, technology,
                    education, and entertainment, its fast pace defining the term New
                    York minute. Home to the headquarters of the United Nations, New
                    York is an important center for international diplomacy and has been
                    described as the cultural and financial capital of the world.
                </p>
                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Tallinn">
                <ng-template kendoTabContent>
                    <p>
                        Tallinn is the capital and largest city of Estonia. It is situated
                        on the northern coast of the country, on the shore of the Gulf of
                        Finland, 80 km (50 mi) south of Helsinki, east of Stockholm and west
                        of Saint Petersburg. From the 13th century until 1918 (and briefly
                        during the Nazi occupation of Estonia from 1941 to 1944), the city
                        was known as Reval. Tallinn occupies an area of 159.2 km2 (61.5 sq
                        mi) and has a population of 443,894. Approximately 32% of Estonia's
                        total population lives in Tallinn.
                    </p>
                    <p>
                        Tallinn was founded in 1248, but the earliest human settlements are
                        over 5,000 years old, making it one of the oldest capital cities of
                        Northern Europe. Due to its strategic location, the city became a
                        major trade hub, especially from the 14th to the 16th century, when
                        it grew in importance as part of the Hanseatic League.
                    </p>
                </ng-template>
            </kendo-tabstrip-tab>
            <kendo-tabstrip-tab title="Sydney" [disabled]="true" ></kendo-tabstrip-tab>
        </kendo-tabstrip>
    `,
    styles: [`
    kendo-tabstrip p {
        margin: 0;
        padding: 8px;
    }
    `]
})
export class TabStripComponent {
    public onTabSelect(e: SelectEvent): void {
        console.log(e);
    }
}
