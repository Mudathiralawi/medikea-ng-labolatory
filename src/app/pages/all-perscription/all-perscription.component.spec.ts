import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPerscriptionComponent } from './all-perscription.component';

describe('AllPerscriptionComponent', () => {
  let component: AllPerscriptionComponent;
  let fixture: ComponentFixture<AllPerscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AllPerscriptionComponent]
    });
    fixture = TestBed.createComponent(AllPerscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
