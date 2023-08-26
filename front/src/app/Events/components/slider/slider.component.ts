import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{
  array_images!: any [5];
  
  
  ngOnInit(): void {
    for(let i = 1; i<=this.array_images.lenght; i++){
    this.array_images = "slider" + i;
    console.log(this.array_images);


  }
}




  




}
