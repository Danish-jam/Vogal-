import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoFrameComponent } from './LogoFrame.component';

describe('LogoFrameComponent', () => {
  let component: LogoFrameComponent;
  let fixture: ComponentFixture<LogoFrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LogoFrameComponent]
    });
    fixture = TestBed.createComponent(LogoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
