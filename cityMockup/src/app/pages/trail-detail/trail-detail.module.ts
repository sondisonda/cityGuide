import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrailDetailPageRoutingModule } from './trail-detail-routing.module';

import { TrailDetailPage } from './trail-detail';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrailDetailPageRoutingModule
  ],
  declarations: [TrailDetailPage]
})
export class TrailDetailPageModule {}
