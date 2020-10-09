import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class StudentService {
  API_URL: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }


  getAllStudent() {
    return this.http.get(`${this.API_URL}/students`);
  }

  getStudent(){
    return this.http.get(`${this.API_URL}/student`);
  }

  deleteStudent(){
    return this.http.delete('')

  }

  updateStudent(){
    // return this.http.put('')

  }

  createStudent(){
    // return this.http.post()
  }



}
