import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingPerscriptionComponent } from './pending-perscription.component';

describe('PendingPerscriptionComponent', () => {
  let component: PendingPerscriptionComponent;
  let fixture: ComponentFixture<PendingPerscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PendingPerscriptionComponent]
    });
    fixture = TestBed.createComponent(PendingPerscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
