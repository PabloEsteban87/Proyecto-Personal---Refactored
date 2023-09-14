import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service'; 

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.scss'],
})
export class ViewbooksComponent{
   allBooks: any[] = [];
   books: any;

   constructor(
    private booksService: BooksService,
  ) {}

   ngOnInit(): void {
/*   this.allBooksSave(this.books); */
  this.loadAllBooks();
  }

  allBooksSave(books: any){
    this.allBooks.push(books);
    console.log(this.allBooks);
  }

  loadAllBooks() {
    this.booksService.getBooks().subscribe((books: any[]) => {
      this.allBooks = books;
    });
  }

  }  

