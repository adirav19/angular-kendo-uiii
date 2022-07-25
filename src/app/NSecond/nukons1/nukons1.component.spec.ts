import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukons1Component } from './nukons1.component';

describe('Nukons1Component', () => {
  let component: Nukons1Component;
  let fixture: ComponentFixture<Nukons1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukons1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukons1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
