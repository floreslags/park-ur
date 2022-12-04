import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { RentasComponent } from './rentas/rentas.component';

const routes: Routes = [
  {path:'',children:[
    {path:'rentas',component:RentasComponent},
    {path:'bitacora',component:BitacoraComponent},
    {path:'',redirectTo:'rentas',pathMatch:'full'},
    {path:'**',redirectTo:'rentas',pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
