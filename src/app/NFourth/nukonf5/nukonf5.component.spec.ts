import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukonf5Component } from './nukonf5.component';

describe('Nukonf5Component', () => {
  let component: Nukonf5Component;
  let fixture: ComponentFixture<Nukonf5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukonf5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukonf5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
