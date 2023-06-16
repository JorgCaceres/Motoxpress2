import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSectorPageRoutingModule } from './add-sector-routing.module';

import { AddSectorPage } from './add-sector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSectorPageRoutingModule
  ],
  declarations: [AddSectorPage]
})
export class AddSectorPageModule {}
