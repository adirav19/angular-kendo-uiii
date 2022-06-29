import { Component } from '@angular/core';

@Component({
    selector: 'expansionpanel-component',
    template: `
        <div class="expansionpanel-wrapper">
            <kendo-expansionpanel title="Brazil" subtitle="South America">
                <div class="content">
                    <div class="image-container">
                        <img src="https://www.telerik.com/kendo-angular-ui-develop/components/layout/assets/countries/brazil.jpg" alt="Brazil">
                    </div>
                    <span class="content-text">The word “Brazil” likely comes from the Portuguese word for brazilwood, a tree that once grew plentifully along the Brazilian coast. In Portuguese, brazilwood is called pau-brasil, with the word brasil commonly given the etymology “red like an ember”, formed from brasa (“ember”) and the suffix -il (from -iculum or -ilium). As brazilwood produces a deep red dye, it was highly valued by the European textile industry and was the earliest commercially exploited product from Brazil.</span>
                </div>
            </kendo-expansionpanel>
        </div>
    `,
    styles: [`
        .content {
            display: flex;
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
            max-width: 550px;
            margin: 0 auto;
        }
    `]
})
export class ExpansionPanelComponent {}
