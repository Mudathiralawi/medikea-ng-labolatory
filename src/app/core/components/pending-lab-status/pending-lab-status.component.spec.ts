import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingLabStatusComponent } from './pending-lab-status.component';

describe('PendingLabStatusComponent', () => {
  let component: PendingLabStatusComponent;
  let fixture: ComponentFixture<PendingLabStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PendingLabStatusComponent]
    });
    fixture = TestBed.createComponent(PendingLabStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
