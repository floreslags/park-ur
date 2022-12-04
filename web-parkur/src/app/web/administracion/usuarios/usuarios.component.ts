import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort,Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdministracionService } from 'src/app/services/administracion.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  menu:Boolean = false;

  usuarios:any = [];
  activos:any = [];
  expirados:any = [];

  displayedColumns: string[] = ['usuario','nacimiento', 'telefono', 'correo', 'status','acciones'];
  dataUsuarios!: MatTableDataSource<any>;
  dataActivos!: MatTableDataSource<any>;
  dataExpirados!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private administracion:AdministracionService
  ) { }

  ngAfterViewInit() {
    this.dataUsuarios.paginator = this.paginator;
    this.dataUsuarios.sort = this.sort;

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
    this.dataUsuarios.filter = filterValue.trim().toLowerCase();
    this.dataActivos.filter = filterValue.trim().toLowerCase();
    this.dataExpirados.filter = filterValue.trim().toLowerCase();
  }

  getData(){
    this.administracion.getUsuarios().subscribe((res:any)=>{
      this.usuarios = res[0].usuarios;
      this.activos = res[1].usuarios;
      this.expirados = res[2].usuarios;

      this.dataUsuarios = new MatTableDataSource(this.usuarios);
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
