import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukont4Component } from './nukont4.component';

describe('Nukont4Component', () => {
  let component: Nukont4Component;
  let fixture: ComponentFixture<Nukont4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukont4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukont4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
