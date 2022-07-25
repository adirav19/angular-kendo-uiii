import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukonf6Component } from './nukonf6.component';

describe('Nukonf6Component', () => {
  let component: Nukonf6Component;
  let fixture: ComponentFixture<Nukonf6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukonf6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukonf6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
