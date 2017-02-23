import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSeiteComponent } from './login-seite/login-seite.component';
import { StartseiteComponent } from "./startseite/startseite.component";
import {AccountLoeschenComponent} from "./account-loeschen/account-loeschen.component";
import {PasswortAendernComponent} from "./passwort-aendern/passwort-aendern.component";
import {ProfilbildAendernComponent} from "./profilbild-aendern/profilbild-aendern.component";

const routes: Routes = [
  { path: '', redirectTo: 'login-seite', pathMatch: 'full' },
  { path: 'login-seite', component: LoginSeiteComponent, data: { title: 'Login' }},
  { path: 'startseite', component: StartseiteComponent, data: { title: 'Startseite' }},
  { path: 'accountloeschen', component: AccountLoeschenComponent },
  { path: 'passwortaendern', component: PasswortAendernComponent },
  { path: 'profilbildaendern', component: ProfilbildAendernComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
