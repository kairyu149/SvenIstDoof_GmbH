import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LoginService} from '../../login.service';
import {ErrorService} from '../../error.service';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-login-body',
  templateUrl: 'login-body.component.html',
  styleUrls: ['login-body.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginBodyComponent implements OnInit {


  constructor(private loginService: LoginService, private router: Router, private errorService: ErrorService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle("CHECK!");
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(["../startseite"]);
    }
  }

  private login(username, password, savedLogin) {
    this.loginService.login(username, password, !!savedLogin).subscribe(res => this.router.navigate(["../startseite"]), (err) => {
      this.errorService.throwError("Nutzername oder Passwort falsch");
    });
  }

  showDialog = false;


}
