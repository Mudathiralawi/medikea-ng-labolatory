import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLabAddFormComponent } from './manage-lab-add-form.component';

describe('ManageLabAddFormComponent', () => {
  let component: ManageLabAddFormComponent;
  let fixture: ComponentFixture<ManageLabAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ManageLabAddFormComponent]
    });
    fixture = TestBed.createComponent(ManageLabAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
