import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukonfif5Component } from './nukonfif5.component';

describe('Nukonfif5Component', () => {
  let component: Nukonfif5Component;
  let fixture: ComponentFixture<Nukonfif5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukonfif5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukonfif5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
