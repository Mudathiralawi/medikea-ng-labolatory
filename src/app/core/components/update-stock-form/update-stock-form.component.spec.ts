import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStockFormComponent } from './update-stock-form.component';

describe('UpdateStockFormComponent', () => {
  let component: UpdateStockFormComponent;
  let fixture: ComponentFixture<UpdateStockFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UpdateStockFormComponent]
    });
    fixture = TestBed.createComponent(UpdateStockFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
