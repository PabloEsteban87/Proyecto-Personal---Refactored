import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films/films.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-block-films',
  templateUrl: './block-films.component.html',
  styleUrls: ['./block-films.component.scss'],
})
export class BlockFilmsComponent implements OnInit {
  allFilms: any[] = [];
  url: string | undefined;

  constructor(
    private FilmsService: FilmsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadAllFilms();
    this.loadpath();
  }

  loadAllFilms() {
    this.FilmsService.getFilms().subscribe((films: any[]) => {
      for (let item of films) {
        let safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          item['video']
        );
        let film = {
          title: item['title'],
          publicationevent: item['publicationevent'],
          video: safeUrl,
          image: item['image'],
        };
        this.allFilms.push(film);
      }
    });
  }

  loadpath() {
    this.url = '../../../../assets/peliculas/';
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
