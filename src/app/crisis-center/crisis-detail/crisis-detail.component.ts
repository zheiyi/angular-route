import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Crisis, CrisisService }  from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  template: `
  <h2>crises</h2>
  <div *ngIf="crisis$ | async as crisis">
    <h3>"{{ crisis.name }}"</h3>
    <div>
      <label>Id: </label>{{ crisis.id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="crisis.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoCrises(crisis)">Back</button>
    </p>
  </div>
  `,
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis$: Observable<Crisis>;
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) {}

  ngOnInit() {
  	this.crisis$ = this.route.paramMap.pipe(
  	  switchMap((params: ParamMap) => {
  	  	console.log(this.service.getCrisis(params.get('id')));
  	  	return this.service.getCrisis(params.get('id'));
  	  })
  	 );
  }

  gotoCrises(crisis: Crisis) {
  	let crisisId = crisis ? crisis.id : null;
  	// 相对路由
  	this.router.navigate(['../', { id: crisisId, foo: 'foo' }, { relativeTo: this.route }]);
  }

}
