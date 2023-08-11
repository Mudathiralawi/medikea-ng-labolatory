import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPrescriptionTodayTableComponent } from './total-prescription-today-table.component';

describe('TotalPrescriptionTodayTableComponent', () => {
  let component: TotalPrescriptionTodayTableComponent;
  let fixture: ComponentFixture<TotalPrescriptionTodayTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TotalPrescriptionTodayTableComponent]
    });
    fixture = TestBed.createComponent(TotalPrescriptionTodayTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
