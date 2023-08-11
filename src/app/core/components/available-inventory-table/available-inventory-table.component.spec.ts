import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableInventoryTableComponent } from './available-inventory-table.component';

describe('AvailableInventoryTableComponent', () => {
  let component: AvailableInventoryTableComponent;
  let fixture: ComponentFixture<AvailableInventoryTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AvailableInventoryTableComponent]
    });
    fixture = TestBed.createComponent(AvailableInventoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
