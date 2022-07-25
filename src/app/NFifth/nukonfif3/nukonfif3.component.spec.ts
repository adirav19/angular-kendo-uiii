import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukonfif3Component } from './nukonfif3.component';

describe('Nukonfif3Component', () => {
  let component: Nukonfif3Component;
  let fixture: ComponentFixture<Nukonfif3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukonfif3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukonfif3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
