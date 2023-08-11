import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingPrescriptionStatusComponent } from './pending-prescription-status.component';

describe('PendingPrescriptionStatusComponent', () => {
  let component: PendingPrescriptionStatusComponent;
  let fixture: ComponentFixture<PendingPrescriptionStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PendingPrescriptionStatusComponent]
    });
    fixture = TestBed.createComponent(PendingPrescriptionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
