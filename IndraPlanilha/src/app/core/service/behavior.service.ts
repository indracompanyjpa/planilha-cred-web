import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../interface/usuario';

@Injectable({
  providedIn: 'root'
})

export class BehaviorService {

  private usuarioData = new BehaviorSubject<Usuario>({nome: '', email: '', senha: '', porcentagem: 0});

  constructor() { }

  setUsuario (usuario: Usuario): void {
    this.usuarioData.next(usuario);
  }

  getUsuario(): Observable<Usuario> {
    return this.usuarioData.asObservable();
  }

}
