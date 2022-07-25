import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukon5Component } from './nukon5.component';

describe('Nukon5Component', () => {
  let component: Nukon5Component;
  let fixture: ComponentFixture<Nukon5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukon5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukon5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
