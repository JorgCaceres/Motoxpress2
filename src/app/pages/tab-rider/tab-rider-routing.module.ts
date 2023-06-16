import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabRiderPage } from './tab-rider.page';

const routes: Routes = [
  {
    path: '',
    component: TabRiderPage,
    children: [
      {
        path: 'orden-map',
        loadChildren: () => import('./orden-map/orden-map.module').then( m => m.OrdenMapPageModule)
      },
      // {
      //   path: 'orden-rider',
      //   loadChildren: () => import('./orden-rider/orden-rider.module').then( m => m.OrdenRiderPageModule)
      // },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabRiderPageRoutingModule {}
