import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';


interface Cidades {
  name: string
}

@Component({
  selector: 'app-step01',
  templateUrl: './step01.component.html',
  styleUrls: ['./step01.component.css']
})

export class Step01Component implements OnInit {

  items: MenuItem[];

  formGroup: FormGroup;
  cidades: Cidades[] = [];

  personalInformation: any;
  submitted: boolean = false;

  constructor( private fb: FormBuilder, private router: Router) {

    this.formGroup = this.fb.group({
      nome: this.fb.control(''),
      cpf: this.fb.control(''),
      nascimento: this.fb.control(''),
      cidade: this.fb.control('')
    });

    this.items = [];

    this.cidades = [
      {name: 'Cabedelo'},
      {name: 'João Pessoa'},
      {name: 'Guarabira'},
      {name: 'Lucena'},
      {name: 'Santa Rita'},
      {name: 'Mamanguape'},
      {name: 'Jacumã'}
    ];
  }

  ngOnInit(): void {
    this.items = [
      {label: 'Step 1'},
      {label: 'Step 2'},
      {label: 'Step 3'}
    ];
  }

  nextPage() {
    if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.age) {
        this.router.navigate(['steps/seat']);

        return;
    }

    this.submitted = true;
  }

}
