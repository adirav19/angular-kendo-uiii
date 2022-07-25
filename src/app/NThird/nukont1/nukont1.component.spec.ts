import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukont1Component } from './nukont1.component';

describe('Nukont1Component', () => {
  let component: Nukont1Component;
  let fixture: ComponentFixture<Nukont1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukont1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukont1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
