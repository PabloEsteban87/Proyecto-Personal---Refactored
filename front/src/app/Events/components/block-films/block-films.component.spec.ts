import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFilmsComponent } from './block-films.component';

describe('BlockFilmsComponent', () => {
  let component: BlockFilmsComponent;
  let fixture: ComponentFixture<BlockFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockFilmsComponent]
    });
    fixture = TestBed.createComponent(BlockFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
