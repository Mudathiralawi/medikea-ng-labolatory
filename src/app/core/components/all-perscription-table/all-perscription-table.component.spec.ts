import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPerscriptionTableComponent } from './all-perscription-table.component';

describe('AllPerscriptionTableComponent', () => {
  let component: AllPerscriptionTableComponent;
  let fixture: ComponentFixture<AllPerscriptionTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AllPerscriptionTableComponent]
    });
    fixture = TestBed.createComponent(AllPerscriptionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
