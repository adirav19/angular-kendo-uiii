import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nukons3Component } from './nukons3.component';

describe('Nukons3Component', () => {
  let component: Nukons3Component;
  let fixture: ComponentFixture<Nukons3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nukons3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nukons3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
