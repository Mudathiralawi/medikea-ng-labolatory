import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabAssigmentsComponent } from './lab-assigments.component';

describe('LabAssigmentsComponent', () => {
  let component: LabAssigmentsComponent;
  let fixture: ComponentFixture<LabAssigmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LabAssigmentsComponent]
    });
    fixture = TestBed.createComponent(LabAssigmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
