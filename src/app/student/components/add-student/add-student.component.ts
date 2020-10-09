import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})


export class AddStudentComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
   }

  ngOnInit(): void {

  }

  private buildForm(){
    this.form = this.formBuilder.group({
      // id: '',
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      attendance: ['', Validators.required],
    });
  }

}
