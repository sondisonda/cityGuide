import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EventFilterPage } from '../event-filter/event-filter';
import { EventListPage } from './event-list';
import { EventListPageRoutingModule } from './event-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventListPageRoutingModule
  ],
  declarations: [
    EventListPage,
    EventFilterPage
  ],
  entryComponents: [
    EventFilterPage
  ]
})
export class EventListPageModule { }
