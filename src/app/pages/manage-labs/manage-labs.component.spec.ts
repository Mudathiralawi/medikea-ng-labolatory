import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLabsComponent } from './manage-labs.component';

describe('ManageLabsComponent', () => {
  let component: ManageLabsComponent;
  let fixture: ComponentFixture<ManageLabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ManageLabsComponent]
    });
    fixture = TestBed.createComponent(ManageLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
