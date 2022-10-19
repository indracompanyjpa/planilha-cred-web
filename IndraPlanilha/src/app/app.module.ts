import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { ProgressoComponent } from './pages/progresso/progresso.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginService } from './core/service/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { ColaboradorComponent } from './pages/colaborador/colaborador.component';
import { DataPipe } from './core/pipe/data.pipe';
import { CommonModule } from '@angular/common';
import { KnobModule } from 'primeng/knob';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { StepsModule } from 'primeng/steps';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';

import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { Step01Component } from './components/step01/step01.component';
import { StepsRoutingModule } from './module/steps/steps-routing.module';

registerLocaleData(localePT);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgressoComponent,
    HeaderComponent,
    ColaboradorComponent,
    DataPipe,
    FooterComponent,
    ModalComponent,
    Step01Component
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    SliderModule,
    ProgressBarModule,
    CommonModule,
    KnobModule,
    DialogModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    StepsModule,
    DropdownModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CardModule,
    StepsModule,
    StepsRoutingModule
  ],

  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
    ConfirmationService,
    DialogService,
    LoginService,
    DynamicDialogModule
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
