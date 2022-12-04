import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort,Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdministracionService } from 'src/app/services/administracion.service';
import { MatDialog,MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import swal from'sweetalert2';
import { PerfilClienteComponent } from '../perfil-cliente/perfil-cliente.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  menu:Boolean = false;

  clientes:any = [];
  activos:any = [];
  expirados:any = [];

  rentas:any = [];
  coches:any = [];

  displayedColumns: string[] = ['cliente','nacimiento', 'telefono', 'correo', 'status'];
  dataClientes!: MatTableDataSource<any>;
  dataActivos!: MatTableDataSource<any>;
  dataExpirados!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private administracion:AdministracionService,
    private dialog:MatDialog
  ) { }

  ngAfterViewInit() {
    this.dataClientes.paginator = this.paginator;
    this.dataClientes.sort = this.sort;

    this.dataActivos.paginator = this.paginator;
    this.dataActivos.sort = this.sort;

    this.dataExpirados.paginator = this.paginator;
    this.dataExpirados.sort = this.sort;

  }

  ngOnInit(): void {
    this.getData()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataClientes.filter = filterValue.trim().toLowerCase();
    this.dataActivos.filter = filterValue.trim().toLowerCase();
    this.dataExpirados.filter = filterValue.trim().toLowerCase();
  }

  getData(){
    this.administracion.getClientes().subscribe((res:any)=>{
      this.clientes = res[0].clientes;
      this.activos = res[1].clientes;
      this.expirados = res[2].clientes;

      this.dataClientes = new MatTableDataSource(this.clientes);
      this.dataActivos = new MatTableDataSource(this.activos);
      this.dataExpirados = new MatTableDataSource(this.expirados);
    });


  }

  showMenu(){
    if(this.menu === false){
      this.menu = true;
    }else{
      this.menu = false;
    }
  }

  verPerfil(item:any){

    let card = {
      title:'Perfil del cliente',
      cliente:item,
      coches:'',
      rentas:''
    }

    this.administracion.getCochesCliente(item).subscribe((c:any)=>{
      card.coches = c;
    })

    this.administracion.getRentasCliente(item).subscribe((r:any)=>{
      card.rentas = r;
    })

    const cliente = this.dialog.open(PerfilClienteComponent,{
      data:card
    })
  }


}
