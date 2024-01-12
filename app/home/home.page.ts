import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  mensaje: string =""
  constructor(private rutaActiva: ActivatedRoute,
    private menuController: MenuController, private router: Router,
              private alertcontroller: AlertController) { 
    this.rutaActiva.queryParams.subscribe(params =>{
      if(params['loginUsuario']){
        this.mensaje = params['loginUsuario'];
        console.log(this.mensaje);
      }
    })
  }

  ngOnInit() {
  }

  cerrarSesion(){
    sessionStorage.clear();
    this.mensajeCerrar();
    this.router.navigateByUrl('/login');
    
  }

  async mensajeCerrar(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Graciaas!',
      message : 'Hasta la próxima! :D',
      buttons : ['OK']
    })
    alerta.present();
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  redirectLogin() {

    this.router.navigate(['/login']);
 
  }
 
   redirectRegistro() {
 
    this.router.navigate(['/registro']);
 
  }
 
   

}
