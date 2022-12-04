import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { PerfilInventarioComponent } from './perfil-inventario/perfil-inventario.component';


@NgModule({
  declarations: [
    InicioComponent,
    SidebarComponent,
    PerfilInventarioComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    SharedModule
  ],
  exports:[
    SidebarComponent
  ]
})
export class WebModule { }
