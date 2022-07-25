import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukon4Component } from './nukon4.component';

describe('Nukon4Component', () => {
  let component: Nukon4Component;
  let fixture: ComponentFixture<Nukon4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukon4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukon4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
