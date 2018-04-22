import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroRoutingModule } from './heroes-routing.module';

import { HeroListComponent }    from './hero-list/hero-list.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

import { HeroService } from './hero.service';
import { slideInDownAnimation } from '../../animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule,
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
  ],
  providers: [
    HeroService,
  ]
})
export class HeroesModule { }
