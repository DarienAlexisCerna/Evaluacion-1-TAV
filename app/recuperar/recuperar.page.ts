import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {


  usuario: string =""
  password: string =""

  sesion = {
    usuario:"",
    nuevapassword:""
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }




  recuperar(){
    console.log("Usuario:", this.sesion.usuario)
    console.log("Password:",this.sesion.nuevapassword)

    let datosEnviar : NavigationExtras = {
      queryParams: {
        loginUsuario: this.sesion.usuario,
        loginPassword: this.sesion.nuevapassword
      }
    }


    this.router.navigate(['/home'],datosEnviar);
  }
}
