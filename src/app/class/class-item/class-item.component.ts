import { Component, OnInit, Input } from '@angular/core';
import { ClassService } from '@class/class.service';
import { Class } from '@class/class';

@Component({
  selector: 'class-item',
  templateUrl: './class-item.component.html',
  styleUrls: ['./class-item.component.css']
})
export class ClassItemComponent implements OnInit {

  @Input() class: Class;

  log(classname: string) {
    console.log("Class name:", classname);
  }

  constructor() { }

  ngOnInit() {
  }

}
