import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLabEditFormComponent } from './manage-lab-edit-form.component';

describe('ManageLabEditFormComponent', () => {
  let component: ManageLabEditFormComponent;
  let fixture: ComponentFixture<ManageLabEditFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ManageLabEditFormComponent]
    });
    fixture = TestBed.createComponent(ManageLabEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
