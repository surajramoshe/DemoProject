import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { GrandChildComponent } from './grand-child/grand-child.component';

@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent,
    GrandChildComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule,
  ]
})
export class ParentModule {

 }
