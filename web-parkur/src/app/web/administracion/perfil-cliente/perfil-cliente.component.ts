import { Component, OnInit,Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { AdministracionService } from 'src/app/services/administracion.service';
import { ClientesComponent } from '../clientes/clientes.component';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.scss']
})
export class PerfilClienteComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private administracion:AdministracionService,
    public dialogRef:MatDialogRef<ClientesComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
