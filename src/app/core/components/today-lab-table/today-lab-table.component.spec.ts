import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayLabTableComponent } from './today-lab-table.component';

describe('TodayLabTableComponent', () => {
  let component: TodayLabTableComponent;
  let fixture: ComponentFixture<TodayLabTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TodayLabTableComponent]
    });
    fixture = TestBed.createComponent(TodayLabTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
