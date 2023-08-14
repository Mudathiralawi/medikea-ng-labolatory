import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLabSearchComponent } from './manage-lab-search.component';

describe('ManageLabSearchComponent', () => {
  let component: ManageLabSearchComponent;
  let fixture: ComponentFixture<ManageLabSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ManageLabSearchComponent]
    });
    fixture = TestBed.createComponent(ManageLabSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
