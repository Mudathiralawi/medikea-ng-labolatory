import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrderedLabsComponent } from './all-ordered-labs.component';

describe('AllOrderedLabsComponent', () => {
  let component: AllOrderedLabsComponent;
  let fixture: ComponentFixture<AllOrderedLabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AllOrderedLabsComponent]
    });
    fixture = TestBed.createComponent(AllOrderedLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
