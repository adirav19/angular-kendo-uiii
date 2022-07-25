import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukont3Component } from './nukont3.component';

describe('Nukont3Component', () => {
  let component: Nukont3Component;
  let fixture: ComponentFixture<Nukont3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukont3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukont3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
