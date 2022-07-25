import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukonfif6Component } from './nukonfif6.component';

describe('Nukonfif6Component', () => {
  let component: Nukonfif6Component;
  let fixture: ComponentFixture<Nukonfif6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukonfif6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukonfif6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
