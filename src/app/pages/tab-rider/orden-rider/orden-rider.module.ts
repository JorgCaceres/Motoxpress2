import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdenRiderPageRoutingModule } from './orden-rider-routing.module';

import { OrdenRiderPage } from './orden-rider.page';
import { OrdenesRiderComponent } from 'src/app/components/ordenes-rider/ordenes-rider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdenRiderPageRoutingModule
  ],
  declarations: [OrdenRiderPage, OrdenesRiderComponent]
})
export class OrdenRiderPageModule {}
