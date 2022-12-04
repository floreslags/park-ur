import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  showSpinner:Boolean = false;

  loginForm = new FormGroup({
    correo: new FormControl('',[Validators.required,Validators.email]),
    contrasena: new FormControl('',[Validators.required]),
  })

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.showSpinner = false;

  }

  login(){

    this.authService.login(this.loginForm.value).subscribe((res:any)=>{
      console.log(res);

      if(res.error === false){
        this.showSpinner = true;
        localStorage.setItem('token',res.token);
        setTimeout(() => {
          this.router.navigate(['/web'])
        }, 2000);

        this.loginForm.reset();
      }else{
        swal.fire({
          timer:1000,
          text:res.message
        })
      }

    })

    this.loginForm.reset()
  }



}
