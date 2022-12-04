import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort,Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdministracionService } from 'src/app/services/administracion.service';


@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.scss']
})
export class BitacoraComponent implements OnInit {

  menu:Boolean = false;

  rentas:any = [];
  activos:any = [];
  expirados:any = [];

  displayedColumns: string[] = ['fecha','cliente', 'auto', 'lugar', 'servicio','estado'];
  dataRentas!: MatTableDataSource<any>;
  dataActivos!: MatTableDataSource<any>;
  dataExpirados!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private administracion:AdministracionService
  ) { }

  ngAfterViewInit() {
    this.dataRentas.paginator = this.paginator;
    this.dataRentas.sort = this.sort;

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
    this.dataRentas.filter = filterValue.trim().toLowerCase();
    this.dataActivos.filter = filterValue.trim().toLowerCase();
    this.dataExpirados.filter = filterValue.trim().toLowerCase();
  }

  getData(){
    this.administracion.getRentas().subscribe((res:any)=>{
      this.rentas = res[0].rentas;
      this.activos = res[1].rentas;
      this.expirados = res[2].rentas;

      this.dataRentas = new MatTableDataSource(this.rentas);
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
