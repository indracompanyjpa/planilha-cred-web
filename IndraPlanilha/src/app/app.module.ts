import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { ProgressoComponent } from './pages/progresso/progresso.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginService } from './core/service/login.service';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { ColaboradorComponent } from './pages/colaborador/colaborador.component';
import { DataPipe } from './core/pipe/data.pipe';
import { CommonModule } from '@angular/common';
import { KnobModule } from 'primeng/knob';

import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { FooterComponent } from './components/footer/footer.component';
registerLocaleData(localePT);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgressoComponent,
    HeaderComponent,
    ColaboradorComponent,
    DataPipe,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    SliderModule,
    ProgressBarModule,
    CommonModule,
    KnobModule
  ],

  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
    LoginService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
