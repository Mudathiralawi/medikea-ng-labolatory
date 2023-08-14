import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneLabTableComponent } from './done-lab-table.component';

describe('DoneLabTableComponent', () => {
  let component: DoneLabTableComponent;
  let fixture: ComponentFixture<DoneLabTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DoneLabTableComponent]
    });
    fixture = TestBed.createComponent(DoneLabTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
