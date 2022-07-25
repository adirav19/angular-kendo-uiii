import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukons6Component } from './nukons6.component';

describe('Nukons6Component', () => {
  let component: Nukons6Component;
  let fixture: ComponentFixture<Nukons6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukons6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukons6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
