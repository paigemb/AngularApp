import { TagFilterPipe } from './components/tag-filter.pipe';
import { StudentFilterPipe } from './components/student-filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { SingleStudentComponent } from './components/single-student/single-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SingleStudentComponent,
    StudentFilterPipe, 
    TagFilterPipe
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatChipsModule, 
    MatFormFieldModule
  ],

 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
