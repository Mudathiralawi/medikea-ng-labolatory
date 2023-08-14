import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneLabSearchComponent } from './done-lab-search.component';

describe('DoneLabSearchComponent', () => {
  let component: DoneLabSearchComponent;
  let fixture: ComponentFixture<DoneLabSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DoneLabSearchComponent]
    });
    fixture = TestBed.createComponent(DoneLabSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
