import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingPrescriptionTableComponent } from './pending-prescription-table.component';

describe('PendingPrescriptionTableComponent', () => {
  let component: PendingPrescriptionTableComponent;
  let fixture: ComponentFixture<PendingPrescriptionTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PendingPrescriptionTableComponent]
    });
    fixture = TestBed.createComponent(PendingPrescriptionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
