import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLabsSearchComponent } from './all-labs-search.component';

describe('AllLabsSearchComponent', () => {
  let component: AllLabsSearchComponent;
  let fixture: ComponentFixture<AllLabsSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AllLabsSearchComponent]
    });
    fixture = TestBed.createComponent(AllLabsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
