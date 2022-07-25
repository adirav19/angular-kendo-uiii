import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukonf3Component } from './nukonf3.component';

describe('Nukonf3Component', () => {
  let component: Nukonf3Component;
  let fixture: ComponentFixture<Nukonf3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukonf3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukonf3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
