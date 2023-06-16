import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudRiderPageRoutingModule } from './crud-rider-routing.module';

import { CrudRiderPage } from './crud-rider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudRiderPageRoutingModule
  ],
  declarations: [CrudRiderPage]
})
export class CrudRiderPageModule {}
