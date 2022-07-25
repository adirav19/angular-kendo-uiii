import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukon3Component } from './nukon3.component';

describe('Nukon3Component', () => {
  let component: Nukon3Component;
  let fixture: ComponentFixture<Nukon3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukon3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukon3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
