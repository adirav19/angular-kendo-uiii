import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukonf4Component } from './nukonf4.component';

describe('Nukonf4Component', () => {
  let component: Nukonf4Component;
  let fixture: ComponentFixture<Nukonf4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukonf4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukonf4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
