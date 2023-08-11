import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedPerscriptionTableComponent } from './completed-perscription-table.component';

describe('CompletedPerscriptionTableComponent', () => {
  let component: CompletedPerscriptionTableComponent;
  let fixture: ComponentFixture<CompletedPerscriptionTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CompletedPerscriptionTableComponent]
    });
    fixture = TestBed.createComponent(CompletedPerscriptionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
