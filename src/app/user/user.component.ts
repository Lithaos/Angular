import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  username = '';
  isEmpty = true;

  constructor() { }

  ngOnInit() {
  }

  onChangeName() {
    if (this.username.length != 0)
      this.isEmpty = false;
  else
    this.isEmpty = true;
  }
  onClickReset(){
    this.username='';
    this.onChangeName();
  }


}
