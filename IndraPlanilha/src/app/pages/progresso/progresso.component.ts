import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/interface/usuario';
import { UsuarioService } from 'src/app/core/service/usuario.service';


@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})

export class ProgressoComponent implements OnInit {

  usuario: Usuario[] = [];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
      this.usuarioService.listarColaboradores().subscribe(colaboradores => {
          this.usuario = colaboradores;
          this.loading = false;
      });
  }
}
