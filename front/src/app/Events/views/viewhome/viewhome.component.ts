import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-viewhome',
  templateUrl: './viewhome.component.html',
  styleUrls: ['./viewhome.component.scss']
})
export class ViewhomeComponent {



  isFront: boolean;

  constructor(private renderer: Renderer2){
    this.isFront = true;
  }

/*   @Input() containernav2!: HTMLElement; */

  ngOnInit() {
    
  }
  

  openMap( openmap: HTMLElement, imageopenmap: HTMLElement){

  }



/*   openMenu(){
    if (this.isFront) {
      console.log(this.containernav);
      this.renderer.removeClass(this.containernav, 'ocultar-menu')
      this.renderer.addClass(this.containernav, 'show-menu')
  /*   this.renderer.addClass(this.nav.getElement, 'show-menu'); 
  }
  else{
    this.renderer.addClass(this.containernav, 'ocultar-menu')
    this.renderer.removeClass(this.containernav, 'show-menu')
  }
  this.isFront = !this.isFront;
  } */
}
