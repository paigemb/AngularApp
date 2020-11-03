import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { StudentService } from '../../services/student.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'], 
})

export class StudentsComponent { //implements OnInit {
  public searchTerm: string; //used when searching by name
  public searchTag: string; //used when searching by tag; 
  students: Array<any> = []; //array of students 

  
constructor(private studentService: StudentService) { //calls student service 
   }
   
  ngOnInit() {
    this.studentService.getStudent().subscribe(res => { //gets data from API and populates students array 
      this.students = res['students'];
      for (let s of this.students){ 
        s['tag'] = ["bb"];
      }
      console.log(this.students)
    });
  }
}