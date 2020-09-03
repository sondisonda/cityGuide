import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EventDetailPage } from './event-detail';

const routes: Routes = [
  {
    path: '',
    component: EventDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventDetailPageRoutingModule { }
