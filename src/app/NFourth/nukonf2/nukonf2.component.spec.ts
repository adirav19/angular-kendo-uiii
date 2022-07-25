import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukonf2Component } from './nukonf2.component';

describe('Nukonf2Component', () => {
  let component: Nukonf2Component;
  let fixture: ComponentFixture<Nukonf2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukonf2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukonf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
