import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLabsTableComponent } from './all-labs-table.component';

describe('AllLabsTableComponent', () => {
  let component: AllLabsTableComponent;
  let fixture: ComponentFixture<AllLabsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AllLabsTableComponent]
    });
    fixture = TestBed.createComponent(AllLabsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
