import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-this-week',
  templateUrl: './this-week.component.html',
  styleUrls: ['./this-week.component.css', '../app.component.css']
})

export class ThisWeekComponent implements OnInit {
  tasks : string[] = [
    "Reviw Analog IC", 
    "Prepare Angular session", "Practice problem solving"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
