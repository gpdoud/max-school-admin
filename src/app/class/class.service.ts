import { Injectable } from '@angular/core';
import { Class } from './class';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  classes: Class[] = [
    new Class(".Net Boot Camp"),
    new Class("Java Boot Camp")
  ];

  constructor() { }
}
