import { Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  public active : boolean = true;
  @ViewChild('containernav2') menuMovil!: ElementRef;

  bodyElement! : any; 

  constructor(private renderer: Renderer2){}

  showMenu() : void{
    
    if(this.active){
     
      this.renderer.addClass(this.menuMovil.nativeElement, "show-menu");
/*        this.renderer.addClass(this.bodyElement, "body-blur"); */
      this.renderer.removeClass(this.menuMovil.nativeElement, "hide-menu");
      this.renderer.removeClass(this.menuMovil.nativeElement, 'hideDisplay');  

    }
    
    else{
      this.renderer.removeClass(this.menuMovil.nativeElement, "show-menu");
/*        this.renderer.removeClass(this.bodyElement, "body-blur");  */
      this.renderer.addClass(this.menuMovil.nativeElement, "hide-menu");
      setTimeout(() => {
        this.renderer.addClass(this.menuMovil.nativeElement, 'hideDisplay');
      }, 1500);
    }
    this.active = !this.active;
  }

  ngOnInit() {
this.bodyElement = document.querySelector('body'); 
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
