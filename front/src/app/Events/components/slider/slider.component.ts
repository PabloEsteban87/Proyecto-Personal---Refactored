import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  array_images: any = Array();
  j: any = 0;
  imagePath!: string;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    for (let i = 1; i <= 5; i++) {
      this.array_images.push('../../../../assets/slider/slider' + i + '.png');
    }

    this.imagePath = this.array_images[this.j];
  }

  left() {
    if (this.j <= 0) {
      this.j = 4;
      this.imagePath = this.array_images[this.j];
    } else {
      this.j--;
      this.imagePath = this.array_images[this.j];
    }
  }

  right() {
    if (this.j >= 4) {
      this.j = 0;
      this.imagePath = this.array_images[this.j];
    } else {
      this.j++;
      this.imagePath = this.array_images[this.j];
    }
  }
}
