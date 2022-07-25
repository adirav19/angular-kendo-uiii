import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukon1Component } from './nukon1.component';

describe('Nukon1Component', () => {
  let component: Nukon1Component;
  let fixture: ComponentFixture<Nukon1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukon1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukon1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
