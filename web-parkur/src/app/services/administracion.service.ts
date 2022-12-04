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

  saveUsuario(data:any){
    return this.http.post('http://localhost/PARKURWS/services/administracion_service.php?opcion=addUsuario',JSON.stringify(data),{})
  }

  updateUsuario(data:any){
    return this.http.post('http://localhost/PARKURWS/services/administracion_service.php?opcion=updateUsuario',JSON.stringify(data),{})
  }

  deleteUsuario(data:any){
    return this.http.post('http://localhost/PARKURWS/services/administracion_service.php?opcion=deleteUsuario',JSON.stringify(data),{})
  }

  getClientes(){
    return this.http.get('http://localhost/PARKURWS/services/administracion_service.php?opcion=getClientes',{});
  }

  getRentas(){
    return this.http.get('http://localhost/PARKURWS/services/administracion_service.php?opcion=getRentas',{});
  }

  getRentasCliente(data:any){
    return this.http.post('http://localhost/PARKURWS/services/administracion_service.php?opcion=getRentasUsuario',JSON.stringify(data),{});
  }

  getGeneros(){
    return this.http.get('http://localhost/PARKURWS/services/administracion_service.php?opcion=getGeneros',{});
  }

  getCochesCliente(data:any){
    return this.http.post('http://localhost/PARKURWS/services/administracion_service.php?opcion=getCochesUsuario',JSON.stringify(data),{});
  }
  
}
