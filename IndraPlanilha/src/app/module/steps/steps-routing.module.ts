import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Step01Component } from 'src/app/components/step01/step01.component';


const routes: Routes = [
  { path: 'progresso/:id/step01', component: Step01Component}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})

export class StepsRoutingModule { }
