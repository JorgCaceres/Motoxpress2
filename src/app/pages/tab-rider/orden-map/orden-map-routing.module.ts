import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdenMapPage } from './orden-map.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenMapPageRoutingModule {}
