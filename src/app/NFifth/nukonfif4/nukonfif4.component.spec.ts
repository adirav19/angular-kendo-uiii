import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukonfif4Component } from './nukonfif4.component';

describe('Nukonfif4Component', () => {
  let component: Nukonfif4Component;
  let fixture: ComponentFixture<Nukonfif4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukonfif4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukonfif4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
