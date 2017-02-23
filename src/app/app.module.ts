import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RoutingModule } from './app-routing.module';

// Eigene Module
import { AppComponent } from './app.component';
import { LoginSeiteComponent } from './login-seite/login-seite.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { HeaderComponent } from './startseite/header/header.component';
import { FooterComponent } from './startseite/footer/footer.component';
import { BodyComponent } from './startseite/body/body.component';
import { LoginBodyComponent } from './login-seite/login-body/login-body.component';
import { LoginFooterComponent } from './login-seite/login-footer/login-footer.component';
import { AccountLoeschenComponent } from './account-loeschen/account-loeschen.component';
import { PasswortAendernComponent } from './passwort-aendern/passwort-aendern.component';
import { ProfilbildAendernComponent } from './profilbild-aendern/profilbild-aendern.component';
import { ModalErrorComponent } from './modal/modal-error/modal-error.component';
import { ModalSuccessComponent } from './modal/modal-success/modal-success.component';
import { ModalGearComponent } from './modal/modal-gear/modal-gear.component';

import { LoginService } from './login.service';
import { ErrorService } from './error.service';
import { ApiCommunicatorService } from './api-communicator.service';
import {BodyDynamicsService} from "./body-dynamics.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginSeiteComponent,
    StartseiteComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LoginBodyComponent,
    LoginFooterComponent,
    AccountLoeschenComponent,
    PasswortAendernComponent,
    ProfilbildAendernComponent,
    ModalErrorComponent,
    ModalSuccessComponent,
    ModalGearComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RoutingModule
  ],
  providers: [ApiCommunicatorService, LoginService, ErrorService, BodyDynamicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
