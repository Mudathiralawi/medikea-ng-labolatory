import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensingMedicineFormComponent } from './dispensing-medicine-form.component';

describe('DispensingMedicineFormComponent', () => {
  let component: DispensingMedicineFormComponent;
  let fixture: ComponentFixture<DispensingMedicineFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DispensingMedicineFormComponent]
    });
    fixture = TestBed.createComponent(DispensingMedicineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
