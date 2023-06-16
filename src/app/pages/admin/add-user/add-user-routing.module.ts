import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserPage } from './add-user.page';

const routes: Routes = [
  {
    path: '',
    component: AddUserPage
  },
  {
    path: 'add-sector',
    loadChildren: () => import('./add-sector/add-sector.module').then( m => m.AddSectorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUserPageRoutingModule {}
