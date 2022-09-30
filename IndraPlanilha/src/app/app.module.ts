import { NgModule } from '@angular/core';
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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgressoComponent,
    HeaderComponent
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
    ProgressBarModule
  ],

  providers: [LoginService],
  bootstrap: [AppComponent]
})

export class AppModule { }
