import { Component } from '@angular/core';
import { CompartidoService } from './servicios/compartido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BIT Music';
  usuarioLogueado = false;

  constructor (
    private _compartidoService:CompartidoService,
    private _router: Router
  ){
  if(localStorage.getItem("sesion") != null){
    this.usuarioLogueado = true;
  }
  this._compartidoService.logueEmitido.subscribe (
      usuarioLogueado =>{
      this.usuarioLogueado = usuarioLogueado;
    }
  )
}
cerrarSesion(){
  this.usuarioLogueado = false;
  localStorage.removeItem("sesion");
  localStorage.removeItem("playlist");
  this._router.navigate(['/'])
}
}
