import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedPerscriptionComponent } from './completed-perscription.component';

describe('CompletedPerscriptionComponent', () => {
  let component: CompletedPerscriptionComponent;
  let fixture: ComponentFixture<CompletedPerscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CompletedPerscriptionComponent]
    });
    fixture = TestBed.createComponent(CompletedPerscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
