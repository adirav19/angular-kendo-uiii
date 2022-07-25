import { Component, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { data, Item } from './entities/data';

@Component({
    selector: 'app-scrollview',
    template: `
    <kendo-scrollview
    #sv
    [data]="items"
    [width]="width"
    [height]="height"
    [arrows]="true"
    [endless]="true"
  >
    <ng-template let-item="item">
      {{item.url}}
      
    </ng-template>
  </kendo-scrollview>
  <button kendoButton (click)="paused = !paused">
    {{ paused ? "Resume" : "Pause" }}
  </button>
`,
styles: [
  `
    .k-scrollview-wrap {
      margin: 0 auto;
    }
    .demo-title {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0;
      padding: 15px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.4);
      text-align: center;
      font-size: 24px;
    }
  `,
],
})
export class ScrollviewComponent implements OnDestroy, AfterViewInit {
@ViewChild("sv") private scrollView;
public paused = false;
public items: any = data;
public width = "100%";
public height = "500px";
private interval;

public ngAfterViewInit(): void {
  this.interval = setInterval(() => {
    if (!this.paused) {
      this.scrollView.next();
    }
  }, 3000);
}

public ngOnDestroy(): void {
  clearInterval(this.interval);
}
}