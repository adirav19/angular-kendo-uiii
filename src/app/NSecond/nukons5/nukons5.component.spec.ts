import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukons5Component } from './nukons5.component';

describe('Nukons5Component', () => {
  let component: Nukons5Component;
  let fixture: ComponentFixture<Nukons5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukons5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukons5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
