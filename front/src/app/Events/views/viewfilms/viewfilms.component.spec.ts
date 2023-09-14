import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfilmsComponent } from './viewfilms.component';

describe('ViewfilmsComponent', () => {
  let component: ViewfilmsComponent;
  let fixture: ComponentFixture<ViewfilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewfilmsComponent]
    });
    fixture = TestBed.createComponent(ViewfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
