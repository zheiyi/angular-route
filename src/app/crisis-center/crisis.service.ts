import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export class Crisis {
  constructor(public id: number, public name: string) { }
}

const CRISES = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

@Injectable()
export class CrisisService {
  getCrises() { return Observable.of(CRISES); }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      // (+) before `id` turns the string into a number
      map(crises => crises.find(crisis => crisis.id === +id))
    );
  }
}
