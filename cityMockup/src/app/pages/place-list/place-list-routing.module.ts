import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlaceListPage } from './place-list';
const routes: Routes = [
  {
    path: '',
    component: PlaceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceListPageRoutingModule {}
