import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukonf1Component } from './nukonf1.component';

describe('Nukonf1Component', () => {
  let component: Nukonf1Component;
  let fixture: ComponentFixture<Nukonf1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukonf1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukonf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
