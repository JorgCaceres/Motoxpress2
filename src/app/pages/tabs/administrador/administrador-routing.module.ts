import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministradorPage } from './administrador.page';

const routes: Routes = [
  {
    path: '',
    component: AdministradorPage
  },
  {
    path: 'crud-cliente',
    loadChildren: () => import('./crud-cliente/crud-cliente.module').then( m => m.CrudClientePageModule)
  },
  {
    path: 'crud-rider',
    loadChildren: () => import('./crud-rider/crud-rider.module').then( m => m.CrudRiderPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorPageRoutingModule {}
