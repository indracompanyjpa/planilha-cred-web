import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Tarefa } from 'src/app/core/interface/tarefa';
import { Usuario } from 'src/app/core/interface/usuario';
import { TarefaService } from 'src/app/core/service/tarefa.service';
import { UsuarioService } from 'src/app/core/service/usuario.service';


@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})

export class TarefasComponent implements OnInit {

  usuario = {} as Usuario;
  usuarioId: string | null = '';
  UstibbRestante: number = 0;

  ref: DynamicDialogRef | undefined;

  tarefas: Tarefa [] = [];

  metaAtingida: number = 0;
  metaNaoAtingida: number = 0;

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  currentDate = new Date();


  constructor(
    private service: UsuarioService, 
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    public dialogService: DialogService,
    private tarefaService: TarefaService
  ) {}

  ngOnInit() {
    this.getUsuario();

    this.tarefaService.listarTarefas().subscribe(tarefas => {
      this.tarefas = tarefas;
      this.loading = false;
    });


    // if(value.porcentagem === 100) {
    //   this.metaAtingida++;
    // } else {
    //   this.metaNaoAtingida++;
    // }
  }

  getUsuario(){
    this.usuarioId = this.route.snapshot.paramMap.get('id');
    this.service.listarColaboradorId(Number(this.usuarioId)).subscribe(response => {
      this.usuario = response;
      this.UstibbRestante = 100 - this.usuario.porcentagem;
    });
  }

  confirm() {
    this.confirmationService.confirm({
        message: 'Você tem certeza que deseja excluir essa tarefas?',
        accept: () => {},
    });
  }

  showDynamicDialog(){
    this.ref = this.dialogService.open(ModalComponent, {
      header: 'Adicionar Tarefa',
      width: 'auto',
      height: 'auto'
    });
  }
}
