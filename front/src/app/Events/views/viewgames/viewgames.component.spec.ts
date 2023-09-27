import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgamesComponent } from './viewgames.component';

describe('ViewgamesComponent', () => {
  let component: ViewgamesComponent;
  let fixture: ComponentFixture<ViewgamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewgamesComponent]
    });
    fixture = TestBed.createComponent(ViewgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
