import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLabTableComponent } from './manage-lab-table.component';

describe('ManageLabTableComponent', () => {
  let component: ManageLabTableComponent;
  let fixture: ComponentFixture<ManageLabTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ManageLabTableComponent]
    });
    fixture = TestBed.createComponent(ManageLabTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
