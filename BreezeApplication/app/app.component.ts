import { Component } from '@angular/core';

@Component({
  selector: 'yo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 4 Breeze Application';
  onButtonClick() {
    this.title = 'Angular 4 Breeze Application';
  }
}
