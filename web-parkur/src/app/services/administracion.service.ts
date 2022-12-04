import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  constructor(
    private http:HttpClient
  ) { }

  getUsuarios(){
    return this.http.get('http://localhost/PARKURWS/services/administracion_service.php?opcion=getUsuarios',{});
  }

  getClientes(){
    return this.http.get('http://localhost/PARKURWS/services/administracion_service.php?opcion=getClientes',{});
  }

  getRentas(){
    return this.http.get('http://localhost/PARKURWS/services/administracion_service.php?opcion=getRentas',{});
  }
  
}
