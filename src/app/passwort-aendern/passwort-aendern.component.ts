import {Component, OnInit} from '@angular/core';
import { ErrorService } from '../error.service';
import { ApiCommunicatorService } from '../api-communicator.service';
import { Title } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

const API_DATA = require('../api.json')

@Component({
  selector: 'app-passwort-aendern',
  templateUrl: './passwort-aendern.component.html',
  styleUrls: ['./passwort-aendern.component.css']
})
export class PasswortAendernComponent implements OnInit {
  private oldPW;
  private newPW1;
  private newPW2;

  constructor(private errorService: ErrorService, private apiCommunicatorService:ApiCommunicatorService, private titleService: Title,private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.titleService.setTitle( "CHECK!" );
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(["../login-seite"]);
    }
  }

  public checkPassword() {

    this.oldPW = (<HTMLInputElement>document.getElementById('oldPW')).value;
    this.newPW1 = (<HTMLInputElement>document.getElementById('newPW1')).value;
    this.newPW2 = (<HTMLInputElement>document.getElementById('newPW2')).value;


    if (this.newPW1.length <7){
    } else if(this.newPW1 !== this.newPW2) {
      this.errorService.throwError("Die eingegebenen Passwörter stimmen nicht überein!");
    } else {
      let body = {"newpassword": this.newPW1,"password": this.oldPW}
      this.apiCommunicatorService.putWithHeader(API_DATA.chgPassword, body).subscribe((res: any) => this.errorService.throwSuccess("Passwortänderung erfolgreich!"),(err) => this.errorService.throwError("Passworteingabe falsch, bitte versuchen Sie es erneut!"));
 

  }

  }
}
