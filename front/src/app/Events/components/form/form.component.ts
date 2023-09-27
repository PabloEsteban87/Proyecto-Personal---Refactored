import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RecommendedBooksService } from '../../services//Recommended/recommended-books.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  allRecommendedBooks: any[] = [];
  FormRecommended!: FormGroup;

  constructor(
    private router: Router,
    private recommendedBooksService: RecommendedBooksService
  ) {}

  ngOnInit(): void {
    this.FormRecommended = new FormGroup({
      name: new FormControl(),
      date: new FormControl(),
      book: new FormControl(),
      recommended: new FormControl(),
    });
  }

  back() {
    this.router.navigate(['viewhome']);
  }

  onSubmitForm() {
    this.recommendedBooksService
      .postRecommendedBooks(this.FormRecommended.value)
      .subscribe((books: any[]) => {});
  }
}
