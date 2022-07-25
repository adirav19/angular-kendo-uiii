import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopluComponent } from './toplu.component';

describe('TopluComponent', () => {
  let component: TopluComponent;
  let fixture: ComponentFixture<TopluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopluComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
