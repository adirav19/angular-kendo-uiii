import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfragisticsComponent } from './infragistics.component';

describe('InfragisticsComponent', () => {
  let component: InfragisticsComponent;
  let fixture: ComponentFixture<InfragisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfragisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfragisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
