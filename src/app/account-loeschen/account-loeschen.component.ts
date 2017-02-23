import { Component, OnInit } from '@angular/core';
import {ApiCommunicatorService} from "../api-communicator.service";
import { ErrorService } from '../error.service';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-account-loeschen',
  templateUrl: './account-loeschen.component.html',
  styleUrls: ['./account-loeschen.component.css']
})
export class AccountLoeschenComponent implements OnInit {

  constructor(private errorService: ErrorService, private apiCommunicatorService:ApiCommunicatorService,private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  if (!this.loginService.isLoggedIn()) {
    this.router.navigate(["../login-seite"]);
  }
  }

  public deleteAccount() {
    let password = (<HTMLInputElement>document.getElementById('passwordField')).value;
    console.log("password:"+password);
    this.apiCommunicatorService.deleteStudent().subscribe((res: any) => {
        this.errorService.setSuccessLogout();
        this.errorService.throwSuccess("Ihr Benutzer wurde erfolgreich gelöscht!");
      },
    (err) => this.errorService.throwError("Fehler beim Löschen des Accounts, bitte versuchen Sie es erneut!"));
  }

}
