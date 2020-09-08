import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrailListPage } from './trail-list';

const routes: Routes = [
  {
    path: '',
    component: TrailListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrailListPageRoutingModule {}
