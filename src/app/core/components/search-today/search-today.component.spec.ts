import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTodayComponent } from './search-today.component';

describe('SearchTodayComponent', () => {
  let component: SearchTodayComponent;
  let fixture: ComponentFixture<SearchTodayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchTodayComponent]
    });
    fixture = TestBed.createComponent(SearchTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
