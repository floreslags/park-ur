import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { ReportesComponent } from './reportes.component';
import { RentasComponent } from './rentas/rentas.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WebModule } from '../web.module';


@NgModule({
  declarations: [
    ReportesComponent,
    RentasComponent,
    BitacoraComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    SharedModule,
    WebModule
  ]
})
export class ReportesModule { }
