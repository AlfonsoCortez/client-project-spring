import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudentModel } from './../../../core/models/Student.model';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {

  @Input() student: StudentModel;
  @Output() studentClicked: EventEmitter<string> = new EventEmitter();
  id: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.student);

  }

  clickStudent(){
    // console.log(this.student.id);
    // this.id = this.student.id;
    this.studentClicked.emit(this.student.id);
  }

}
