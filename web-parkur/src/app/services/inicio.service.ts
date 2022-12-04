import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(
    private http:HttpClient
  ) { }

  getInventario(){
    return this.http.get('http://localhost/PARKURWS/services/inicio_service.php?opcion=getInventario',{})
  }

  getRentas(){
    return this.http.get('http://localhost/PARKURWS/services/inicio_service.php?opcion=getRentas',{});
  }
  getRenta(data:any){
    return this.http.post('http://localhost/PARKURWS/services/inicio_service.php?opcion=getRenta',JSON.stringify(data),{});
  }

}
