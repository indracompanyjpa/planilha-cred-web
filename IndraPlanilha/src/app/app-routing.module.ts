import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Usuario } from './core/interface/usuario';
import { ColaboradorComponent } from './pages/colaborador/colaborador.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgressoComponent } from './pages/progresso/progresso.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'progresso', component: ProgressoComponent},
  { path: 'progresso/:id', component: ColaboradorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  usuario = {} as Usuario;

}
