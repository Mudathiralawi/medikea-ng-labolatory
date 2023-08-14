import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneLabStatusComponent } from './done-lab-status.component';

describe('DoneLabStatusComponent', () => {
  let component: DoneLabStatusComponent;
  let fixture: ComponentFixture<DoneLabStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DoneLabStatusComponent]
    });
    fixture = TestBed.createComponent(DoneLabStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
