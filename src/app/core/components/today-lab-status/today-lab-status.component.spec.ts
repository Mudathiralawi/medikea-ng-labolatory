import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayLabStatusComponent } from './today-lab-status.component';

describe('TodayLabStatusComponent', () => {
  let component: TodayLabStatusComponent;
  let fixture: ComponentFixture<TodayLabStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TodayLabStatusComponent]
    });
    fixture = TestBed.createComponent(TodayLabStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
