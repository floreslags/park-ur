import { Component, OnInit } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { InicioService } from 'src/app/services/inicio.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { PerfilInventarioComponent } from '../perfil-inventario/perfil-inventario.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  menu:Boolean = false;

  inventario:any = []
  rentas:any = {}

  constructor(
    private inicio:InicioService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.inicio.getInventario().subscribe((res:any)=>{
      console.log(res)
      this.inventario = res;
    })

    this.inicio.getRentas().subscribe((res:any)=>{
      this.rentas = res;
    })
  }

  showLugar(item:any){
    const lugar =  this.dialog.open(PerfilInventarioComponent,{
      data:this.rentas.find((rental:any)=>rental.lugar === item.lugar)
    });

    lugar.afterClosed().subscribe((res:any)=>{
    })
  }

  showMenu(){
    if(this.menu === false){
      this.menu = true;
    }else{
      this.menu = false;
    }
  }

}
