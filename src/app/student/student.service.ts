import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[]  = [
    new Student("John", "Doe"),
    new Student("Jane", "Doe")
  ];

  list(): Observable<Student[]> {
    return of(this.students);
  }

  constructor() { }
}
