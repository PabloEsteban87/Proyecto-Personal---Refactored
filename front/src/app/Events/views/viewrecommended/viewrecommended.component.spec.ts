import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrecommendedComponent } from './viewrecommended.component';

describe('ViewrecommendedComponent', () => {
  let component: ViewrecommendedComponent;
  let fixture: ComponentFixture<ViewrecommendedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewrecommendedComponent]
    });
    fixture = TestBed.createComponent(ViewrecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
