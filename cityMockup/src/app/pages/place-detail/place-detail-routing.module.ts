import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlaceDetailPage } from './place-detail';

const routes: Routes = [
  {
    path: '',
    component: PlaceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceDetailPageRoutingModule { }
