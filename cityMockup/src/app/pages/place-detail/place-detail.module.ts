import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceDetailPage } from './place-detail';
import {  PlaceDetailPageRoutingModule } from './place-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PlaceDetailPageRoutingModule
  ],
  declarations: [
    PlaceDetailPage,
  ]
})
export class PlaceDetailModule { }
