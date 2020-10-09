import { Component, OnInit } from '@angular/core';
import { StudentService } from "./../../../core/services/student.service";
import { StudentModel } from "./../../../core/models/Student.model";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentslist: any[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    // console.log(this.studentslist);
    this.getAllStudents();

  }

  getAllStudents() {
    this.studentService.getAllStudent().subscribe((students: any) => {
      this.studentslist = students;
    })
  }
  clickStudent(id: number){
    console.log(id);
  }



}
