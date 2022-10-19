import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [{
      label: 'step01',
      routerLink: 'step01'
    },
    {
      label: 'Seat',
      routerLink: 'seat'
    },
    {
      label: 'Payment',
      routerLink: 'payment'
    },
    {
      label: 'Confirmation',
      routerLink: 'confirmation'
    }
  ];
  }
}

