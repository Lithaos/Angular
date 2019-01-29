import { Component, OnInit } from '@angular/core';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})
export class Task3Component implements OnInit {
isClicked = false;
clicks = [];
  constructor() { }

  ngOnInit() {
  }

buttonClicked(){
  this.clicks.push(new Date());
  this.isClicked=!this.isClicked;
}
}
