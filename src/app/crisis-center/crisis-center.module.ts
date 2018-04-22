import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

import { CrisisService } from './crisis.service';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';

@NgModule({
  imports: [
    CommonModule，
    FormsModule,
    CrisisCenterRoutingModule,
  ],
  declarations: [CrisisListComponent, CrisisDetailComponent, CrisisCenterComponent, CrisisCenterHomeComponent],
  providers: [CrisisService],
})
export class CrisisCenterModule { }
