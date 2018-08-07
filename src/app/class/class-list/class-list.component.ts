import { Component, OnInit } from '@angular/core';
import { ClassService } from '@class/class.service';
import { Class } from '@class/class';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  classes: Class[] = [];

  constructor(private clssvc: ClassService) { }

  ngOnInit() {
    this.classes = this.clssvc.classes;
  }

}
