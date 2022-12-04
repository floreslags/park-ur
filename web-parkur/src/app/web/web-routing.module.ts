import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  
  {path:'',children:[
    {path:'inicio',component:InicioComponent},
    {path:'administracion',loadChildren:()=>import('./administracion/administracion.module').then((m)=>m.AdministracionModule)},
    {path:'reportes',loadChildren:()=>import('./reportes/reportes.module').then((m)=>m.ReportesModule)},
    {path:'',redirectTo:'inicio',pathMatch:'full'},
    {path:'**',redirectTo:'inicio',pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
