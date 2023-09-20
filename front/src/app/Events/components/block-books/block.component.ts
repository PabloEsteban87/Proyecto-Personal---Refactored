import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent implements OnInit {
  allBooks: any[] = [];
  url: string | undefined;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.loadAllBooks();
    this.loadpath();
  }

  loadAllBooks() {
    this.booksService.getBooks().subscribe((books: any[]) => {
      this.allBooks = books;
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

  onMouseOut(hoverName: HTMLElement, back: HTMLElement, front: HTMLElement) {
    hoverName.style.transform =
      'perspective(600px) rotateY(0deg) translateX(0%)';
    back.style.display = 'block';
  }
}
