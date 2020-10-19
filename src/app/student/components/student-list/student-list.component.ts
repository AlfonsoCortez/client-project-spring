import { Component, OnInit } from '@angular/core';
import { StudentService } from "./../../../core/services/student.service";
import { StudentModel } from "./../../../core/models/Student.model";
import { Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth.service';
import { AuthGuard } from './../../../auth.guard';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentslist: any[] = [];

  constructor(
      private studentService: StudentService,
      private authService: AuthService,
      private router: Router,
    ) { }

  ngOnInit(): void {
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

  logout(){
    this.authService.logout().then(() => {
      this.router.navigate([`/`]);
    })
  }

}
