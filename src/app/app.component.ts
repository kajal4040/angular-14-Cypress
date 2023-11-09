import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person = {
    fName: 'Kajal',
    lName: 'Udani'
  }
  title = 'angular-2';
}
