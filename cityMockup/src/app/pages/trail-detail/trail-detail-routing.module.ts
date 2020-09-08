import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrailDetailPage } from './trail-detail';

const routes: Routes = [
  {
    path: '',
    component: TrailDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrailDetailPageRoutingModule {}
