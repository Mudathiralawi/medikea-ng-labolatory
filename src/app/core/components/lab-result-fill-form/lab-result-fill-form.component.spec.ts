import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabResultFillFormComponent } from './lab-result-fill-form.component';

describe('LabResultFillFormComponent', () => {
  let component: LabResultFillFormComponent;
  let fixture: ComponentFixture<LabResultFillFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LabResultFillFormComponent]
    });
    fixture = TestBed.createComponent(LabResultFillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
