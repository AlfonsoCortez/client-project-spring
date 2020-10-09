import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentModel } from '../models/Student.model';


@Injectable({
  providedIn: 'root'
})


export class StudentService {
  API_URL: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }


  getAllStudent(){
    return this.http.get(`${this.API_URL}/students`);
  }

  getStudent(id: string): Observable<StudentModel>{
    return this.http.get<StudentModel>(`${this.API_URL}/student?id=${id}`);
  }

  deleteStudent(id: string){
    return this.http.delete('')

  }

  updateStudent(){
    // return this.http.put('')

  }

  createStudent(){
    // return this.http.post()
  }



}
