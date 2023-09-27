import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public active: boolean = true;
  @ViewChild('containernav2mobile') menuMovil!: ElementRef;

  bodyElement!: any;

  constructor(private renderer: Renderer2) {}

  showMenu(): void {
    if (this.active) {
      this.renderer.addClass(this.menuMovil.nativeElement, 'show-menu');
      this.renderer.removeClass(this.menuMovil.nativeElement, 'hide-menu');
      this.renderer.removeClass(this.menuMovil.nativeElement, 'hideDisplay');
    } else {
      this.renderer.removeClass(this.menuMovil.nativeElement, 'show-menu');
      this.renderer.addClass(this.menuMovil.nativeElement, 'hide-menu');
      setTimeout(() => {
        this.renderer.addClass(this.menuMovil.nativeElement, 'hideDisplay');
      }, 1500);
    }
    this.active = !this.active;
  }

  ngOnInit() {
    this.bodyElement = document.querySelector('body');
  }
}
