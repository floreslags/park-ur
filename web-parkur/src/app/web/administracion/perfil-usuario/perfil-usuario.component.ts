import { Component, OnInit,Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { AdministracionService } from 'src/app/services/administracion.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosComponent } from '../usuarios/usuarios.component';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent implements OnInit {

  formUsuario = new FormGroup({
    genero_id:new FormControl('',[Validators.required]),
    nombres:new FormControl('',[Validators.required]),
    apellidos:new FormControl('',[Validators.required]),
    fecha_nac:new FormControl('',[]),
    numero_telefono:new FormControl('',[Validators.required]),
    foto:new FormControl('',[]),
    correo:new FormControl('',[Validators.required,Validators.email]),
    contrasena:new FormControl('',[Validators.required]),
  });

  generos:any = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private administracion:AdministracionService,
    public dialogRef:MatDialogRef<UsuariosComponent>
  ) { }

  ngOnInit(): void {
    this.getData()
    this.formUsuario.patchValue(this.data.card)

  }

  getData(){
    this.administracion.getGeneros().subscribe((res:any)=>{
      this.generos = res;
    })
  }

}
