import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContentEditorComponent } from './headerContentEditor.component';

describe('EditnavComponent', () => {
  let component: HeaderContentEditorComponent;
  let fixture: ComponentFixture<HeaderContentEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderContentEditorComponent]
    });
    fixture = TestBed.createComponent(HeaderContentEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
