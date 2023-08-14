import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleColllectedStatusComponent } from './sample-colllected-status.component';

describe('SampleColllectedStatusComponent', () => {
  let component: SampleColllectedStatusComponent;
  let fixture: ComponentFixture<SampleColllectedStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SampleColllectedStatusComponent]
    });
    fixture = TestBed.createComponent(SampleColllectedStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
