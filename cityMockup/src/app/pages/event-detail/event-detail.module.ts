import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventDetailPage } from './event-detail';
import { EventDetailPageRoutingModule } from './event-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    EventDetailPageRoutingModule
  ],
  declarations: [
    EventDetailPage,
  ]
})
export class EventDetailModule { }
