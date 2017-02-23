import {Component, OnInit} from '@angular/core';
import {ApiCommunicatorService} from '../api-communicator.service';
import { ErrorService } from '../error.service';
import { Title } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-profilbild-aendern',
  templateUrl: './profilbild-aendern.component.html',
  styleUrls: ['./profilbild-aendern.component.css'],
  providers: [ApiCommunicatorService]
})
export class ProfilbildAendernComponent implements OnInit {

  public avatarPictures = [];
  public pictureCurrentUrl = this.avatarPictures[this.currentPicture];
  public currentPicture = (!!sessionStorage.getItem("avatarId")) ? sessionStorage.getItem("avatarId") : localStorage.getItem("avatarId");
  public picTopOld = true;
  public picTopNew = false;
  public pictureID;
  public index;

  constructor(private apiCommunicatorService: ApiCommunicatorService, private errorService: ErrorService,private titleService: Title,private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(["../login-seite"]);
    }
    this.titleService.setTitle( "CHECK! - Profilbild ändern" );
    this.getAvatars();
  }

  private getAvatars() {
    this.apiCommunicatorService.getAvatar("All")
      .subscribe((avatar: Array<Object>) => this.avatarPictures = avatar);
  }

  changePictureCurrent(url, index) {
    this.picTopOld = false;
    this.picTopNew = true;
    this.pictureCurrentUrl = url;
    this.pictureID = index;
  }

  public changePicture() {
    this.apiCommunicatorService.putProfilePicture(this.pictureID).subscribe((res: any) => {
            this.errorService.throwSuccess("Profilbild erfolgreich geändert!");
            if(!!sessionStorage.getItem("avatarId")){
                sessionStorage.setItem("avatarId", this.pictureID);
            } else {
              localStorage.setItem("avatarId", this.pictureID);
            }
            }, (err) => this.errorService.throwError("Fehler beim ändern des Profilbilds!"));
  }

}
