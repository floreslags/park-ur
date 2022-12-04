import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';
import { ClientesComponent } from './clientes/clientes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WebModule } from '../web.module';


@NgModule({
  declarations: [
    AdministracionComponent,
    UsuariosComponent,
    PerfilUsuarioComponent,
    PerfilClienteComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    SharedModule,
    WebModule
  ]
})
export class AdministracionModule { }
