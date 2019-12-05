import { Component, OnInit } from '@angular/core'
import { Usuario } from '../../modelos/usuario'
import { UsuarioService } from 'src/app/servicios/usuario.service'
import { Router } from '@angular/router'
import { CompartidoService } from 'src/app/servicios/compartido.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) export class LoginComponent implements OnInit {
  usuario: Usuario;
  LoginCorrecto; constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _compartidoService: CompartidoService
  ) {
    if (localStorage.getItem("sesion") != null) {
      this._router.navigate(['/menu'])
    }
    this.usuario = new Usuario('', '', null, '', '', '', '');
  } ngOnInit() {
    document.getElementById('footer').classList.add("fixed-bottom");
  }
}