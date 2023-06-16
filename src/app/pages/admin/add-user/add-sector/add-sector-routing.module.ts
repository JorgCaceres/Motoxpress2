import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSectorPage } from './add-sector.page';

const routes: Routes = [
  {
    path: '',
    component: AddSectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSectorPageRoutingModule {}
