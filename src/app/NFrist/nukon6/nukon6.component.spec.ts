import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukon6Component } from './nukon6.component';

describe('Nukon6Component', () => {
  let component: Nukon6Component;
  let fixture: ComponentFixture<Nukon6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukon6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukon6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
