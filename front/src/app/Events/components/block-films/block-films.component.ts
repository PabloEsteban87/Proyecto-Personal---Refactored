import { Component , OnInit, Renderer2} from '@angular/core';
import { FilmsService } from '../../services/films/films.service';

@Component({
  selector: 'app-block-films',
  templateUrl: './block-films.component.html',
  styleUrls: ['./block-films.component.scss']
})
export class BlockFilmsComponent implements OnInit{
  allFilms: any[] = [];
  url: string | undefined;


  constructor(
    private FilmsService: FilmsService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.loadAllFilms();
    this.loadpath();
  }

  loadAllFilms() {
    this.FilmsService.getFilms().subscribe((films: any[]) => {
      this.allFilms = films;
    });
  }

  loadpath() {
    this.url = '../../../../assets/libros/';
  }

  onMouseEnter(hoverName: HTMLElement, back: HTMLElement, front: HTMLElement) {
    hoverName.style.transform =
      'perspective(600px) rotateY(-180deg) translateX(100%)';
    back.style.display = 'block';
    back.style.position = 'absolute';
  }

  onMouseOut(hoverName: HTMLElement, back: HTMLElement, front: HTMLElement){
    hoverName.style.transform =
    'perspective(600px) rotateY(0deg) translateX(0%)';
  back.style.display = 'block';
  }
}
