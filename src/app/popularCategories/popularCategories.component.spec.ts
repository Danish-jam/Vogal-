import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCategoriesComponent } from './popularCategories.component';

describe('PopularCategoriesComponent', () => {
  let component: PopularCategoriesComponent;
  let fixture: ComponentFixture<PopularCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PopularCategoriesComponent]
    });
    fixture = TestBed.createComponent(PopularCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
