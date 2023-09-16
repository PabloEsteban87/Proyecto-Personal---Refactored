import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockGamesComponent } from './block-games.component';

describe('BlockGamesComponent', () => {
  let component: BlockGamesComponent;
  let fixture: ComponentFixture<BlockGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockGamesComponent]
    });
    fixture = TestBed.createComponent(BlockGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
