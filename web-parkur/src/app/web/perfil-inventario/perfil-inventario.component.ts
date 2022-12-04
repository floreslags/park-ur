import { Component, OnInit,Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-perfil-inventario',
  templateUrl: './perfil-inventario.component.html',
  styleUrls: ['./perfil-inventario.component.scss']
})
export class PerfilInventarioComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
  }

  showData(){
    return this.data;
  }

}
