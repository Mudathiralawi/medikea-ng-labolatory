import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPendingPrescriptionComponent } from './search-pending-prescription.component';

describe('SearchPendingPrescriptionComponent', () => {
  let component: SearchPendingPrescriptionComponent;
  let fixture: ComponentFixture<SearchPendingPrescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchPendingPrescriptionComponent]
    });
    fixture = TestBed.createComponent(SearchPendingPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
