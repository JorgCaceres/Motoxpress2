import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabRiderPageRoutingModule } from './tab-rider-routing.module';

import { TabRiderPage } from './tab-rider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabRiderPageRoutingModule
  ],
  declarations: [TabRiderPage]
})
export class TabRiderPageModule {}
