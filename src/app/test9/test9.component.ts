import { Component } from '@angular/core';
import { PlotBand } from '@progress/kendo-angular-charts';

@Component({
    selector: 'app-test9',
    template: `
      <kendo-chart style="height: 120px;">
        <kendo-chart-title text="Temperature [&deg;C]"></kendo-chart-title>
        <kendo-chart-series>
          <kendo-chart-series-item type="bullet" [data]="temp" color="#fff">
          </kendo-chart-series-item>
          <kendo-chart-category-axis>
            <kendo-chart-category-axis-item [majorGridLines]="hidden" [minorGridLines]="hidden">
            </kendo-chart-category-axis-item>
          </kendo-chart-category-axis>
          <kendo-chart-value-axis>
            <kendo-chart-value-axis-item [majorGridLines]="hidden" [minorTicks]="hidden"
                                         [min]="-10" [max]="45" [plotBands]="tempPlotBands">
            </kendo-chart-value-axis-item>
          </kendo-chart-value-axis>
        </kendo-chart-series>
        <kendo-chart-tooltip>
          <ng-template kendoChartSeriesTooltipTemplate let-value="value">
              Maximum: {{ value.target }} <br />
              Average: {{ value.current }}
          </ng-template>
        </kendo-chart-tooltip>
      </kendo-chart>

      <kendo-chart style="height: 120px;">
        <kendo-chart-title text="Humidity [%]"></kendo-chart-title>
        <kendo-chart-series>
          <kendo-chart-series-item type="bullet" [data]="hum" color="#0058e9">
          </kendo-chart-series-item>
          <kendo-chart-category-axis>
            <kendo-chart-category-axis-item [majorGridLines]="hidden" [minorGridLines]="hidden">
            </kendo-chart-category-axis-item>
          </kendo-chart-category-axis>
          <kendo-chart-value-axis>
            <kendo-chart-value-axis-item [majorGridLines]="hidden" [minorTicks]="hidden"
                                         [min]="0" [max]="100" [plotBands]="humPlotBands">
            </kendo-chart-value-axis-item>
          </kendo-chart-value-axis>
        </kendo-chart-series>
        <kendo-chart-tooltip>
          <ng-template kendoChartSeriesTooltipTemplate let-value="value">
              Maximum: {{ value.target }} <br />
              Average: {{ value.current }}
          </ng-template>
        </kendo-chart-tooltip>
      </kendo-chart>

      <kendo-chart style="height: 120px;">
        <kendo-chart-title text="Atmospheric pressure [mmHg]"></kendo-chart-title>
        <kendo-chart-series>
          <kendo-chart-series-item type="bullet" [data]="mmhg" color="#111">
          </kendo-chart-series-item>
          <kendo-chart-category-axis>
            <kendo-chart-category-axis-item [majorGridLines]="hidden" [minorGridLines]="hidden">
            </kendo-chart-category-axis-item>
          </kendo-chart-category-axis>
          <kendo-chart-value-axis>
            <kendo-chart-value-axis-item [majorGridLines]="hidden" [minorTicks]="hidden"
                                         [min]="715" [max]="795" [plotBands]="mmhgPlotBands">
            </kendo-chart-value-axis-item>
          </kendo-chart-value-axis>
        </kendo-chart-series>
        <kendo-chart-tooltip>
          <ng-template kendoChartSeriesTooltipTemplate let-value="value">
              Maximum: {{ value.target }} <br />
              Average: {{ value.current }}
          </ng-template>
        </kendo-chart-tooltip>
      </kendo-chart>
    `
})
export class Test9Component {
    public hidden: {visible: boolean} = { visible: false };
    public tempPlotBands: PlotBand[] = [{
        from: 30, to: 45, color: '#e62325', opacity: 1
    }, {
        from: 15, to: 30, color: '#ffc000', opacity: 1
    }, {
        from: 0, to: 15, color: '#37b400', opacity: 1
    }, {
        from: -10, to: 0, color: '#5392ff', opacity: 1
    }];
    public humPlotBands: PlotBand[] = [{
        from: 0, to: 33, color: '#ccc', opacity: .6
    }, {
        from: 33, to: 66, color: '#ccc', opacity: .3
    }];
    public mmhgPlotBands: PlotBand[] = [{
        from: 715, to: 752, color: '#ccc', opacity: .6
    }, {
        from: 752, to: 772, color: '#ccc', opacity: .3
    }];
    public temp = [[25, 22]];
    public hum = [[45, 60]];
    public mmhg = [[750, 762]];
}