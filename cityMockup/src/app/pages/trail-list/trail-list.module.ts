import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrailListPageRoutingModule } from './trail-list-routing.module';

import { TrailListPage } from './trail-list';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrailListPageRoutingModule
  ],
  declarations: [TrailListPage]
})
export class TrailListPageModule {}
