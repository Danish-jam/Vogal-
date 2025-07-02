import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProListComponent } from './proList.component';

describe('AllproductsComponent', () => {
  let component: ProListComponent;
  let fixture: ComponentFixture<ProListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProListComponent]
    });
    fixture = TestBed.createComponent(ProListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
