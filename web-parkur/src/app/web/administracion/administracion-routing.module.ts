import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path:'',children:[
    {path:'usuarios',component:UsuariosComponent},
    {path:'clientes',component:ClientesComponent},
    {path:'perfil-usuario',component:PerfilUsuarioComponent},
    {path:'perfil-cliente',component:PerfilClienteComponent},
    {path:'',redirectTo:'usuarios',pathMatch:'full'},
    {path:'**',redirectTo:'usuarios',pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
