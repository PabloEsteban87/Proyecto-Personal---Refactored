import { Component, OnInit } from '@angular/core';
import { RecommendedBooksService } from '../../services//Recommended/recommended-books.service';

@Component({
  selector: 'app-viewrecommended',
  templateUrl: './viewrecommended.component.html',
  styleUrls: ['./viewrecommended.component.scss'],
})
export class ViewrecommendedComponent implements OnInit {
  allRecommendedBooks: any[] = [];

  constructor(private recommendedBooksService: RecommendedBooksService) {}

  ngOnInit(): void {
    this.loadAllRecommended();
  }

  loadAllRecommended() {
    this.recommendedBooksService
      .getRecommendedBooks()
      .subscribe((recommendedbooks: any[]) => {
        this.allRecommendedBooks = recommendedbooks;
      });
  }
}
