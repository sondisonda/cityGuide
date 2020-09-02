import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PlaceListPage } from './place-list';
import { PlaceListPageRoutingModule } from './place-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PlaceListPageRoutingModule
  ],
  declarations: [PlaceListPage],
})
export class PlaceListModule {}
