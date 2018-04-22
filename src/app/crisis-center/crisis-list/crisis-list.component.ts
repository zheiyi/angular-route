import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CrisisService, Crisis } from '../crisis.service';


@Component({
  selector: 'app-crisis-list',
  template: `
    <h2>CRISES</h2>
    <ul class="items">
      <li *ngFor="let crisis of crises$ | async"
        [class.selected]="crisis.id === selectedId">
        <a [routerLink]="['./', crisis.id]">
          <span class="badge">{{ crisis.id }}</span>{{ crisis.name }}
        </a>
      </li>
    </ul>
    <button routerLink="/sidekicks">Go to sidekicks</button>
  `,
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
  crises$: Observable<Crisis[]>;

  private selectedId: number;

  constructor(
    private service: CrisisService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
  	this.crises$ = this.route.paramMap.pipe(
  	  switchMap((params: ParamMap) => {
  	    this.selectedId = +params.get('id');
        return this.service.getCrises();
  	  })
  	);
  }

}
