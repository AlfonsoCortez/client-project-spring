import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentModel } from 'src/app/core/models/Student.model';
import { StudentService } from './../../../core/services/student.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})


export class AddStudentComponent implements OnInit {

  form: FormGroup;
  options: Boolean[] = [false, true];

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {
    this.buildForm();
   }

  ngOnInit(): void {  }

  saveProduct(event: Event){
    event.preventDefault();
    this.form.value.attendance = this.form.value.attendance ? this.form.value.attendance = true : this.form.value.attendance = false;
    this.studentService.createStudent(this.form.value).subscribe(student => {
      console.log(student);
    });
    this.router.navigate([`/student/students`]);
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      attendance: ['', Validators.required],
    });
  }

}
