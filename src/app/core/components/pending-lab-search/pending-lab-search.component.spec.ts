import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingLabSearchComponent } from './pending-lab-search.component';

describe('PendingLabSearchComponent', () => {
  let component: PendingLabSearchComponent;
  let fixture: ComponentFixture<PendingLabSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PendingLabSearchComponent]
    });
    fixture = TestBed.createComponent(PendingLabSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
