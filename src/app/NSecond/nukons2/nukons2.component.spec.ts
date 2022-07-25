import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukons2Component } from './nukons2.component';

describe('Nukons2Component', () => {
  let component: Nukons2Component;
  let fixture: ComponentFixture<Nukons2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukons2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukons2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
