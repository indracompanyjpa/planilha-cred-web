import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/core/interface/usuario';
import { UsuarioService } from 'src/app/core/service/usuario.service';


@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})

export class ColaboradorComponent implements OnInit {

  usuario = {} as Usuario;

  usuarioId: string | null = '';

  UstibbRestante: number = 0;

  currentDate = new Date();



  constructor(private route: ActivatedRoute, private service: UsuarioService) {}

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(){
    this.usuarioId = this.route.snapshot.paramMap.get('id');
    this.service.listarColaboradorId(Number(this.usuarioId)).subscribe(response => {
      this.usuario = response;
      this.UstibbRestante = 100 - this.usuario.porcentagem;
    });
  }
}
