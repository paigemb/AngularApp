import { Student } from './../models/Student';
import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'studentFilter'
})
export class StudentFilterPipe implements PipeTransform {
    transform(students: Student[], searchTerm: string): Student[] { //method to filter through students 
        if (!students || !searchTerm) { 
            return students;
        }
        //compares first and last name to inputed search term 
        return students.filter(student => 
            student.firstName.toLowerCase().indexOf(searchTerm.toLowerCase() )!== -1 || student.lastName.toLowerCase().indexOf(searchTerm.toLowerCase() )!== -1 ) ;
    }
   
}
