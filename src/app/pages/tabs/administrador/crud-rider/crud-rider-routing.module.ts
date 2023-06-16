import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudRiderPage } from './crud-rider.page';

const routes: Routes = [
  {
    path: '',
    component: CrudRiderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRiderPageRoutingModule {}
