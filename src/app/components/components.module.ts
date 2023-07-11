import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoadingRecogidaComponent } from './loading-recogida/loading-recogida.component';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';
import { SearchLocationComponent } from './search-location/search-location.component';
import { OrdenEncursoComponent } from './orden-encurso/orden-encurso.component';
import { RecogidaComponent } from './recogida/recogida.component';



@NgModule({
  declarations: [
    RecogidaComponent,
    LoadingRecogidaComponent,
    EmptyScreenComponent,
    SearchLocationComponent,
    OrdenEncursoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    RecogidaComponent,
    LoadingRecogidaComponent,
    EmptyScreenComponent,
    SearchLocationComponent,
    OrdenEncursoComponent
  ],
})
export class ComponentsModule { }
