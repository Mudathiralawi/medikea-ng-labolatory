import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingLabTableComponent } from './pending-lab-table.component';

describe('PendingLabTableComponent', () => {
  let component: PendingLabTableComponent;
  let fixture: ComponentFixture<PendingLabTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PendingLabTableComponent]
    });
    fixture = TestBed.createComponent(PendingLabTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
