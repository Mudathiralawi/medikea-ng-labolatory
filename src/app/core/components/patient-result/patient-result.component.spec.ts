import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientResultComponent } from './patient-result.component';

describe('PatientResultComponent', () => {
  let component: PatientResultComponent;
  let fixture: ComponentFixture<PatientResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PatientResultComponent]
    });
    fixture = TestBed.createComponent(PatientResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
