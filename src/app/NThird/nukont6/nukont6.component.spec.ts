import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukont6Component } from './nukont6.component';

describe('Nukont6Component', () => {
  let component: Nukont6Component;
  let fixture: ComponentFixture<Nukont6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukont6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukont6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
