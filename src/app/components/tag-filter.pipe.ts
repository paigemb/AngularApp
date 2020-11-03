import { Student } from './../models/Student';
import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'tagFilter'
})
export class TagFilterPipe implements PipeTransform { 
    transform(students: Student[], searchTag: string): Student[] { //method to filter through students 
        if (!students || !searchTag) {
            return students;
        }
       //looks through student tag array for a match to the inputed tag 
        return students.filter(student => 
            student.tag.indexOf(searchTag.toLowerCase() )!== -1 ) ;
    }


   
}
