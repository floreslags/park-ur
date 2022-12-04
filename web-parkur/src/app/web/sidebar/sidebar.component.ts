import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  usuario:any = [];

  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getUsuario()
  }

  getUsuario(){

    if(localStorage['token']){
      const data = {
        token:localStorage.getItem('token')
      }
      this.auth.verify(data).subscribe((res:any)=>{
        if(res.error === false){
          this.usuario = res.usuario;
          //console.log(this.usuario)
        }else{
          this.salir()
        }
      })

    }else{
      this.salir()
    }
    
  }
  
  salir(){
    localStorage.clear()
    this.router.navigate(['/auth'])
  }

}
