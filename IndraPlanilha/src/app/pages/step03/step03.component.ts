import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-step03',
  templateUrl: './step03.component.html',
  styleUrls: ['./step03.component.css']
})

export class Step03Component implements OnInit {

  constructor(private router: Router, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }

  returnPage() {
    this.router.navigate(['step02']);
  }

  confirm() {
    this.confirmationService.confirm({
        message: 'Você tem certeza que deseja enviar as informações para a lista de tarefas?',
        accept: () => {}
    });
  }
}
