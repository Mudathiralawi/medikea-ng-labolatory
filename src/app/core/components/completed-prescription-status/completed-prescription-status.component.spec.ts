import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedPrescriptionStatusComponent } from './completed-prescription-status.component';

describe('CompletedPrescriptionStatusComponent', () => {
  let component: CompletedPrescriptionStatusComponent;
  let fixture: ComponentFixture<CompletedPrescriptionStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CompletedPrescriptionStatusComponent]
    });
    fixture = TestBed.createComponent(CompletedPrescriptionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
