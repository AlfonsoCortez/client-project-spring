import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentModel } from 'src/app/core/models/Student.model';
import { StudentService } from './../../../core/services/student.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  form: FormGroup;
  options: Boolean[] = [false, true];
  student: StudentModel;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private route: ActivatedRoute,
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.studentService.getStudent(id).subscribe((student: StudentModel) => {
        console.log("estudiante encontrado");
        console.log(student);
        this.student = student;
      });
    });
  }

  saveProduct(event: Event){
    event.preventDefault();

    this.form.value.attendance = this.form.value.attendance ? this.form.value.attendance = true : this.form.value.attendance = false;
    this.form.value.id = this.student.id;

    this.studentService.updateStudent(this.student.id, this.form.value).subscribe(student => {
      console.log(student);
    });
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: '',
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      attendance: ['', Validators.required],
    });
  }
}
