import { Component } from "@angular/core";
import { mockData, CovidData } from "./covid-data";

@Component({
  selector: "app-test",
  template: `
    <div class="example-config">
      <div class="k-form-field">
        <input
          kendoCheckBox
          id="range-labels"
          type="checkbox"
          [(ngModel)]="showRangeLabels"
        />
        <label for="range-labels" class="k-checkbox-label"
          >Show date range labels</label
        >
      </div>
    </div>

    <kendo-chart>
      <kendo-chart-series>
        <kendo-chart-title text="New Cases"></kendo-chart-title>
        <kendo-chart-series-item
          type="line"
          style="smooth"
          [data]="data"
          field="NewCases"
          categoryField="Date"
          [markers]="{ visible: false }"
          [highlight]="{ visible: false }"
        >
        </kendo-chart-series-item>
      </kendo-chart-series>

      <kendo-chart-category-axis>
        <kendo-chart-category-axis-item
          [labels]="{ format: 'd/M' }"
          [rangeLabels]="{ format: 'dd MMM yyyy', visible: showRangeLabels }"
          [justified]="true"
          [maxDivisions]="20"
          baseUnit="days"
        >
        </kendo-chart-category-axis-item>
      </kendo-chart-category-axis>
    </kendo-chart>
  `,
})
export class TestComponent {
  public data: CovidData[] = mockData();
  public showRangeLabels = true;
}