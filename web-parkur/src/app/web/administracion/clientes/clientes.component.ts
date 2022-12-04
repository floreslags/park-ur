import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort,Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdministracionService } from 'src/app/services/administracion.service';
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

  displayedColumns: string[] = ['cliente','nacimiento', 'telefono', 'correo', 'status','acciones'];
  dataClientes!: MatTableDataSource<any>;
  dataActivos!: MatTableDataSource<any>;
  dataExpirados!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private administracion:AdministracionService
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


}
