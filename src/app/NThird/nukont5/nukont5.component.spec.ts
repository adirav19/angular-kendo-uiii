import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukont5Component } from './nukont5.component';

describe('Nukont5Component', () => {
  let component: Nukont5Component;
  let fixture: ComponentFixture<Nukont5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukont5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukont5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
