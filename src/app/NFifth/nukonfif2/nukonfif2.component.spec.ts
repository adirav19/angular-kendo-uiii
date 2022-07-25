import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukonfif2Component } from './nukonfif2.component';

describe('Nukonfif2Component', () => {
  let component: Nukonfif2Component;
  let fixture: ComponentFixture<Nukonfif2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukonfif2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukonfif2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
