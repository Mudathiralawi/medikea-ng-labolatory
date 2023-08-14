import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCollectionFillFormComponent } from './sample-collection-fill-form.component';

describe('SampleCollectionFillFormComponent', () => {
  let component: SampleCollectionFillFormComponent;
  let fixture: ComponentFixture<SampleCollectionFillFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SampleCollectionFillFormComponent]
    });
    fixture = TestBed.createComponent(SampleCollectionFillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
