import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukonfif1Component } from './nukonfif1.component';

describe('Nukonfif1Component', () => {
  let component: Nukonfif1Component;
  let fixture: ComponentFixture<Nukonfif1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukonfif1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukonfif1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
