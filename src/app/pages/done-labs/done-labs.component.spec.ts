import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneLabsComponent } from './done-labs.component';

describe('DoneLabsComponent', () => {
  let component: DoneLabsComponent;
  let fixture: ComponentFixture<DoneLabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DoneLabsComponent]
    });
    fixture = TestBed.createComponent(DoneLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
