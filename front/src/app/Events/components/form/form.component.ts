import { Component } from '@angular/core';
import { FormBuilder, NgForm, ReactiveFormsModule, FormGroup, FormControl, FormsModule, Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  FormRecommended!: FormGroup; 

  constructor(private router: Router){}

  ngOnInit(): void {
   this.FormRecommended = new FormGroup({
    name: new FormControl(),
    date: new FormControl(),
    book: new FormControl(),
    description: new FormControl(),
   });
  }

  back(){
    this.router.navigate(['']);
  }

  
  onSubmitForm(): void {
    /* this.addSupport(); */
  }


}
