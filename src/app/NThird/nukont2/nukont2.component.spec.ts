import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukont2Component } from './nukont2.component';

describe('Nukont2Component', () => {
  let component: Nukont2Component;
  let fixture: ComponentFixture<Nukont2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukont2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukont2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
