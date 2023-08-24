import { Component, OnInit, Renderer2} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  public active : boolean = false;

  constructor(private renderer: Renderer2){}

  showMenu() : void{
    this.active = !this.active;
  }

  ngOnInit() {


  }

 /*  openMenu(){
    if (this.isFront) {
      console.log(this.containernav);
      this.renderer.removeClass(this.containernav, 'ocultar-menu')
      this.renderer.addClass(this.containernav, 'show-menu')
     this.renderer.addClass(this.nav.getElement, 'show-menu');  
  }
  else{
    this.renderer.addClass(this.containernav, 'ocultar-menu')
    this.renderer.removeClass(this.containernav, 'show-menu')
  }
  this.isFront = !this.isFront;
  }
 */
/*   openMenu(){
    this.nav.getElement();
  /*   this.renderer.addClass(this.nav.getElement, 'show-menu');  */
  /* } */
}
