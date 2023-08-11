import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInventoryBarComponent } from './manage-inventory-bar.component';

describe('ManageInventoryBarComponent', () => {
  let component: ManageInventoryBarComponent;
  let fixture: ComponentFixture<ManageInventoryBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ManageInventoryBarComponent]
    });
    fixture = TestBed.createComponent(ManageInventoryBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
