import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crisis-center',
  template:  `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./crisis-center.component.css']
})
export class CrisisCenterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
