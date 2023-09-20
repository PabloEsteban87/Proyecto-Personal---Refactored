import { Component } from '@angular/core';
import { FormBuilder, NgForm, ReactiveFormsModule, FormGroup, FormControl, FormsModule, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { RecommendedBooksService } from '../../services//Recommended/recommended-books.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  allRecommendedBooks: any[] = [];
  FormRecommended!: FormGroup; 

  constructor(private router: Router, private recommendedBooksService: RecommendedBooksService){}

  ngOnInit(): void {
   this.FormRecommended = new FormGroup({
    name: new FormControl(),
    date: new FormControl(),
    book: new FormControl(),
    description: new FormControl()
  });

   this.loadAllRecommended();
  }

  back(){
    this.router.navigate(['viewhome']);
  }

  loadAllRecommended(){
    this.recommendedBooksService.getRecommendedBooks().subscribe((recommendedbooks: any[]) => {
      this.allRecommendedBooks = recommendedbooks;
    }); 
  }

  
  onSubmitForm(){
       
  } 


}
