import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbiographyComponent } from './viewbiography.component';

describe('ViewbiographyComponent', () => {
  let component: ViewbiographyComponent;
  let fixture: ComponentFixture<ViewbiographyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewbiographyComponent]
    });
    fixture = TestBed.createComponent(ViewbiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
