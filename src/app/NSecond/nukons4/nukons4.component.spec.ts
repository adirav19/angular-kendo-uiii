import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukons4Component } from './nukons4.component';

describe('Nukons4Component', () => {
  let component: Nukons4Component;
  let fixture: ComponentFixture<Nukons4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukons4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukons4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
