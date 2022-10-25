import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  items: MenuItem[] = [];

  activeIndex: number = 0;

  stepRotas = [{index: 0, rota: '/step01'}, {index: 1, rota: '/step02'}, {index: 2, rota: '/step03'}];

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
    {
      command: (event: any) => {
        this.activeIndex = 0;
        this.router.navigate([this.stepRotas[0].rota])
      }
    },
    
    {
      command: (event: any) => {
        this.activeIndex = 1;
        this.router.navigate([this.stepRotas[1].rota])
      }
    },
    
    {
      command: (event: any) => {
        this.activeIndex = 2;
        this.router.navigate([this.stepRotas[2].rota])
      }
    }];
  }

  returnPage() {
    const filtroStep = this.stepRotas.filter((rota) => rota.rota === this.router.url);

    if(filtroStep.length) {
      let novaRota = filtroStep[0].index - 1;
      const rotaSelecionada = this.stepRotas.filter((rota) => rota.index == novaRota)

      this.activeIndex = rotaSelecionada[0].index;
      this.router.navigate([rotaSelecionada[0].rota])
    }
  }

  nextPage() {
    const filtroStep = this.stepRotas.filter((rota) => rota.rota === this.router.url);

    if(filtroStep.length) {
      let novaRota = filtroStep[0].index + 1;
      const rotaSelecionada = this.stepRotas.filter((rota) => rota.index == novaRota)

      this.activeIndex = rotaSelecionada[0].index;
      this.router.navigate([rotaSelecionada[0].rota])
    }
  }
}

