import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  displayParagraph = false;
  clickLog = [];
  constructor() { }

  ngOnInit() {
  }

  toggleParagraph() {
    this.displayParagraph = !this.displayParagraph;
    this.clickLog.push(Date.now());
  }

}
