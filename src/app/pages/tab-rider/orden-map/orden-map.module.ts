import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdenMapPageRoutingModule } from './orden-map-routing.module';

import { OrdenMapPage } from './orden-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdenMapPageRoutingModule
  ],
  declarations: [OrdenMapPage]
})
export class OrdenMapPageModule {}
