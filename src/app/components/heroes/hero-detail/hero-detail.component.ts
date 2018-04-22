import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Hero, HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  template: `
  <h2>HEROES</h2>
  <div *ngIf="hero$ | async as hero">
    <h3>"{{ hero.name }}"</h3>
    <div>
      <label>Id: </label>{{ hero.id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoHeroes(hero)">Back</button>
    </p>
  </div>
  `,
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {}

  ngOnInit() {
  	this.hero$ = this.route.paramMap.pipe(
  	  switchMap((params: ParamMap) => {
  	  	console.log(this.service.getHero(params.get('id')));
  	  	return this.service.getHero(params.get('id'));
  	  })
  	 );
  }

  gotoHeroes(hero: Hero) {
  	let heroId = hero ? hero.id : null;
  	this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }

}
