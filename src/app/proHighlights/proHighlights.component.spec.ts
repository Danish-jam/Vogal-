import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProHighlightsComponent } from './proHighlights.component';

describe('ProHighlightsComponent', () => {
  let component: ProHighlightsComponent;
  let fixture: ComponentFixture<ProHighlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProHighlightsComponent]
    });
    fixture = TestBed.createComponent(ProHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
