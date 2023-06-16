import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdenRiderPage } from './orden-rider.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenRiderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenRiderPageRoutingModule {}
