import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialOrdenesPageRoutingModule } from './historial-ordenes-routing.module';

import { HistorialOrdenesPage } from './historial-ordenes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialOrdenesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HistorialOrdenesPage]
})
export class HistorialOrdenesPageModule {}
