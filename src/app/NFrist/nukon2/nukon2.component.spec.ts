import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukon2Component } from './nukon2.component';

describe('Nukon2Component', () => {
  let component: Nukon2Component;
  let fixture: ComponentFixture<Nukon2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukon2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
