import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendCardComponent } from "../trendCard/trendCard.component";

describe('TrendCardComponent', () => {
  let component: TrendCardComponent;
  let fixture: ComponentFixture<TrendCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TrendCardComponent]
    });
    fixture = TestBed.createComponent(TrendCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
