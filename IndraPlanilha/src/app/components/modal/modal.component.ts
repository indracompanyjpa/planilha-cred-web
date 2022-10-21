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

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
    {
      command: (event: any) => {
        this.activeIndex = 0;
        this.router.navigate(['/step01'])}
    },
    
    {
      command: (event: any) => {
        this.activeIndex = 1;
        this.router.navigate(['/step02'])}
    },
    
    {
      command: (event: any) => {
        this.activeIndex = 2;
        this.router.navigate(['/step03'])}
    }
  ];
  }
}

