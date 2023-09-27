import { Component } from '@angular/core';
import { GamesService } from '../../services/games/games.service';

@Component({
  selector: 'app-block-games',
  templateUrl: './block-games.component.html',
  styleUrls: ['./block-games.component.scss'],
})
export class BlockGamesComponent {
  allGames: any[] = [];
  url: string | undefined;

  constructor(private gamesservice: GamesService) {}

  ngOnInit(): void {
    this.loadAllGames();
    this.loadpath();
  }

  loadAllGames() {
    this.gamesservice.getGames().subscribe((games: any[]) => {
      this.allGames = games;
    });
  }

  loadpath() {
    this.url = '../../../../assets/juegos/';
  }

  onMouseEnter(hoverName: HTMLElement, back: HTMLElement, front: HTMLElement) {
    hoverName.style.transform =
      'perspective(600px) rotateY(-180deg) translateX(100%)';
    back.style.display = 'block';
    back.style.position = 'absolute';
  }

  onMouseOut(hoverName: HTMLElement, back: HTMLElement, front: HTMLElement) {
    hoverName.style.transform =
      'perspective(600px) rotateY(0deg) translateX(0%)';
    back.style.display = 'block';
  }
}
