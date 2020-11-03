import { StudentService } from './../../services/student.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/models/Student';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Tag {
  name: string; 
}

@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.css'] 
})


export class SingleStudentComponent {
  @Input() student: Student;

  public students: Array<any> = []; // array of students 
  public addedTag: string; //stores inputted tag as variable
  public selectable = true; //for use with mat chips 
  public removable = true; //for use with removing mat chips 
  public addOnBlur = true; //evaluate when input loses focus 
  public readonly separatorKeysCodes: number[] = [ENTER, COMMA]; //for use with mat chips 
  public tags: any[] = []; //temp storage when adding/removing tags
  public isHidden = true; //used to hide/display div for test scores
  public isHidden2 = false; //used to hide/display div for test scores
 
/* Methods */

  handleClick(event) {  //handles opening div when click to expand/hide
    const className = 'collapsible-panel--expanded';
    if (event.target.classList.contains(className)) {
        event.target.classList.remove(className);
    } else {
        event.target.classList.add(className);
    }
}
 
   addTag(id) { //handles adding tag to student tag array 
     let addedTag = this.addedTag; 
     this.student.tag.push(addedTag);
     /*for testing*/
     console.log(this.student);
     console.log(this.addedTag);
     console.log(this.student.tag);
    
   }

 findAverage(grades) { //method to calculate average of test scores 
    return grades.reduce(function(a, b){
      return (a*1) + (b*1);}) / grades.length;
}

   add(event: MatChipInputEvent): void { //method to add mat chip tag 
     const input = event.input;
     const value = event.value; 
     if ((value || '').trim()) {
       this.tags.push({name: value.trim()});
     }
     if (input) {
       input.value = '';
     }
   }

   remove(tag: Tag): void { //method to remove mat chip tag 
     const index = this.tags.indexOf(tag);
     if (index >= 0) {
       this.tags.splice(index, 1);
     }
    }
  }