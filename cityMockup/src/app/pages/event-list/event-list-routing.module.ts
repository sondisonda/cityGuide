import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EventListPage } from './event-list';

const routes: Routes = [
  {
    path: '',
    component: EventListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventListPageRoutingModule { }
