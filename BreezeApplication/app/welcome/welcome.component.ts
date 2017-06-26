import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yo-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line:member-ordering
  welcome = 'Welcome to the team !';
  ngOnInit() {
  }

}
