import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreMoreComponent } from './exploreMore.component';

describe('ExploreMoreComponent', () => {
  let component: ExploreMoreComponent;
  let fixture: ComponentFixture<ExploreMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExploreMoreComponent]
    });
    fixture = TestBed.createComponent(ExploreMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
