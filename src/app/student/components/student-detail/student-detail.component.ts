import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { StudentService } from './../../../core/services/student.service';
import { StudentModel } from './../../../core/models/Student.model';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: StudentModel;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.studentService.getStudent(id).subscribe((student: StudentModel) => {
        console.log(student);
        this.student = student;
      });
    });
  }

}
