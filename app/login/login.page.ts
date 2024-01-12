import { Component, OnInit } from '@angular/core';
import {  NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string =""
  password: string =""

  sesion = {
    usuario:"",
    password:""
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion(){
    console.log("Usuario:", this.sesion.usuario)
    console.log("Password:",this.sesion.password)

    let datosEnviar : NavigationExtras = {
      queryParams: {
        loginUsuario: this.sesion.usuario,
        loginPassword: this.sesion.password
      }
    }


    this.router.navigate(['/home'],datosEnviar);
  }

  redirectRecuperar() {
 
    this.router.navigate(['/recuperar']);
 
  }
  

}
