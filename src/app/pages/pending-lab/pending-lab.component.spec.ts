import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingLabComponent } from './pending-lab.component';

describe('PendingLabComponent', () => {
  let component: PendingLabComponent;
  let fixture: ComponentFixture<PendingLabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PendingLabComponent]
    });
    fixture = TestBed.createComponent(PendingLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
