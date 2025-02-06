import { Component } from '@angular/core';

@Component({
  selector: 'app-q2',
  standalone: false,
  templateUrl: './q2.component.html',
  styleUrl: './q2.component.scss'
})
export class Q2Component {
  showDetails = false;
  clickLogs: number[] = [];
  
  isQ2Class:boolean=true;
  q2Styles={
    "background-color":"blue"
  }
  q2Classses={
    "q2class":this.isQ2Class
  }
  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.clickLogs.push(this.clickLogs.length + 1); // Incrementing number for each click

  }
}
