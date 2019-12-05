import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// cliente http hacer peticiones al backend
import { map } from 'rxjs/operators';
//se importa map, libreria para mapear objetos
import { Observable } from 'rxjs'
//Recoger respuestas de cuando hacemos una peticion ajax al servidor

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = "http://localhost:3977/api/";

  constructor(
    private _http: HttpClient
  ) { }

  //Crear cancion similar
  registrar(usuario) {
    let params = JSON.stringify(usuario);
    let options = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' })};
    return this._http.post(
      this.url + "usuario",
      params,
      options
    ).pipe(map(res => res));
  }

  login(usuario) {
    let params = JSON.stringify(usuario);
    let options = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' })
    };
    return this._http.post(
      this.url + "usuario-login",
      params,
      options
    ).pipe(map(res => res));
  }

  actualizarUsuario(id, usuario) {
    let params = JSON.stringify(usuario);
    let options = {
      headers: new HttpHeaders(
        {'Content-Type': 'application/json'})};
    return this._http.put(
      this.url + 'usuario/' + id,
      params,
      options
    ).pipe(map(res => res));
  }

  //Eliminar canción
  eliminarUsuario(id) {
    let options = {
      headers: new HttpHeaders(
        {'Content-Type': 'application/json'
        })
    };
    return this._http.delete(
      this.url + 'usuario/' + id,
      options
    ).pipe(map(res => res));
  }

  //Cargar fichero canción
  cargarImagenUsuario(file: File, id) {
    var formData = new FormData();
    formData.append('image', file);
    return this._http.post(
      this.url + "cargar-imagen-usuario/" + id,
      formData
    ).pipe(map(res => res));
  }

}