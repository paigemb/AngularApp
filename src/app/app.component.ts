import { StudentService } from './services/student.service';
import { Component } from '@angular/core';
import { Student } from './models/Student';
import { Observable } from 'rxjs';
import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  title = 'ohanga-app';

 
}
