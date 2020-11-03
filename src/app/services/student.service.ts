import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
/* Service class to handle pulling data from api */

export class StudentService {
  students: any [] = []; //holds array of students 

  constructor(private http:HttpClient) { }

  //method to fetch data from api 
getStudent() {
  return this.http.get("https://www.hatchways.io/api/assessment/students");

}

}

