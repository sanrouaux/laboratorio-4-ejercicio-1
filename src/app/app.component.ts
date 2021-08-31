import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'santiago-rouaux-ejercicio1';
  ageOne:string;
  ageTwo:string;
  sum:string;
  average:string;

  /**
   * Constructor method
   */
  constructor() {
    this.ageOne = '';
    this.ageTwo = '';
    this.sum = '';
    this.average = '';
  }

  calculate() {
    this.sum = String(parseInt(this.ageOne) + parseInt(this.ageTwo));
    this.average = String((parseInt(this.ageOne) + parseInt(this.ageTwo)) / 2);
  }

  clean() {
    this.ageOne = '';
    this.ageTwo = '';
    this.sum = '';
    this.average = '';
  }

}
