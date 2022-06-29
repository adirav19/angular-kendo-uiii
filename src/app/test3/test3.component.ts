import { Component, ViewEncapsulation } from "@angular/core";
import { LegendItemVisualArgs, Series } from "@progress/kendo-angular-charts";
import {
  Element,
  geometry,
  Group,
  Path,
  Rect as RectShape,
  Text,
} from "@progress/kendo-drawing";
const { Point, Rect, Size } = geometry;

@Component({
  selector: "app-test3",
  template: `
    <kendo-chart
      [ngClass]="{ 'hand-cursor': isOverLegend }"
      (legendItemHover)="isOverLegend = true"
      (legendItemLeave)="isOverLegend = false"
    >
      <kendo-chart-title text="Units sold"></kendo-chart-title>
      <kendo-chart-category-axis>
        <kendo-chart-category-axis-item
          [categories]="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']"
          [title]="{ text: 'Months' }"
        >
        </kendo-chart-category-axis-item>
      </kendo-chart-category-axis>
      <kendo-chart-series>
        <kendo-chart-series-item
          *ngFor="let series of data"
          [type]="series.type"
          [name]="series.name"
          [dashType]="series.dashType"
          [data]="series.data"
        >
        </kendo-chart-series-item>
      </kendo-chart-series>
      <kendo-chart-legend position="bottom" orientation="horizontal">
        <kendo-chart-legend-item [visual]="labelsVisual" cursor="pointer">
        </kendo-chart-legend-item>
      </kendo-chart-legend>
    </kendo-chart>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .hand-cursor {
        cursor: pointer;
      }
    `,
  ],
})

export class Test3Component {
  public isOverLegend = false;
  public  data: any[] = [
    { name: "2018", type: "line", data: [123, 276, 310, 212, 240, 156, 98] },
    {
      name: "2019",
      type: "line",
      dashType: "dashDot",
      data: [165, 210, 287, 144, 190, 167, 212],
    },
    { name: "2020", type: "line", data: [56, 140, 195, 46, 123, 78, 95] },
  ];

  public labelsVisual(args: LegendItemVisualArgs): Element {
    if (args.series.name === "2019") {
      // Create rectangular shape on top of which the label will be drawn
      const rectOptions = {
        stroke: { width: 2, color: "#fff" },
        fill: { color: "#fff" },
      };
      const rectGeometry = new Rect(new Point(0, 3), new Size(60, 10));
      const rect: RectShape = new RectShape(rectGeometry, rectOptions);

      // Create the lines used to represent the custom legend item
      const pathColor = args.options.markers.border.color;
      const path1 = new Path({
        stroke: {
          color: pathColor,
          width: 3,
        },
      });

      const path2 = new Path({
        stroke: {
          color: pathColor,
          width: 3,
        },
      });

      // The paths are constructed by using a chain of commands
      path1.moveTo(0, 7).lineTo(10, 7).close();
      path2.moveTo(15, 7).lineTo(25, 7).close();

      // Create the text associated with the legend item
      const labelText = args.series.name;
      const labelFont = args.options.labels.font;
      const fontColor = args.options.labels.color;
      const textOptions = { font: labelFont, fill: { color: fontColor } };
      const text = new Text(labelText, new Point(27, 0), textOptions);

      // Place all the shapes in a group
      const group = new Group();

      group.append(rect, path1, path2, text);

      // set opacity if the legend item is disabled
      if (!args.active) {
        group.opacity(0.5);
      }

      return group;
    }
    // return the default visualization of the legend items
    return args.createVisual();
  }
}