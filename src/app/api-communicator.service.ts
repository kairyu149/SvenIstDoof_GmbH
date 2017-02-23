import {Injectable} from '@angular/core';
import {Headers, Http, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const API_DATA = require('./api.json');

@Injectable()
export class ApiCommunicatorService {
  private authHeader;
  constructor(private http: Http) {
  }

  private getJsonFromApi(url) {
    if(this.authHeader === undefined){
      this.authHeader = (!!sessionStorage.getItem("authHeader")) ? JSON.parse(sessionStorage.getItem("authHeader")) : JSON.parse(localStorage.getItem("authHeader"));
    }
    console.log(API_DATA.server + url);
    return this.http.get(API_DATA["server"] + url, {headers: this.authHeader})
      .map((res: Response) => {
      let json = res.status;
      console.log("Status: " + json);
      return res.json();
      });
  }

  putNoHeader(url, body) {
    return this.http.put(API_DATA.server + url, body)
      .map((res: Response) => {
      let json = res.status;
      console.log("Status: " + json);
      return res.json();
      });
  }

  putWithHeader(url, myBody) {
    if(this.authHeader === undefined){
      this.authHeader = (!!sessionStorage.getItem("authHeader")) ? JSON.parse(sessionStorage.getItem("authHeader")) : JSON.parse(localStorage.getItem("authHeader"));
    }
    let options = new RequestOptions({ headers: this.authHeader})
    return this.http.put(API_DATA.server + url,myBody, options)
      .map((res: Response) => {
        let json = res.status;
        console.log("Status: " + json);
        return res.json();
      }).catch(e => Observable.throw('Error'));
  }

  deleteStudent() {
    if(this.authHeader === undefined){
      this.authHeader = (!!sessionStorage.getItem("authHeader")) ? JSON.parse(sessionStorage.getItem("authHeader")) : JSON.parse(localStorage.getItem("authHeader"));
    }
console.log("deleteStudent");
    let options = new RequestOptions({ headers: this.authHeader})
    return this.http.delete(API_DATA.server + API_DATA.student ,options)
      .map((res: Response) => {
        let json = res.status;
        console.log("Status: " + json);
        return res.json();
    });
  }

  getAvatar(avatarID) {
    let suffix = "";
    suffix = (avatarID !== "All" ? ("/" + avatarID) : suffix);
    return this.getJsonFromApi(API_DATA.avatars + suffix);
  }

  getStudent() {
    return this.getJsonFromApi(API_DATA.student);
  }

  getChapterIllustrations(chapterID) {
    let suffix = "";
    suffix = (chapterID !== "All" ? (":" + chapterID) : suffix);
    return this.getJsonFromApi(API_DATA.illustrations + suffix);
  }

  getCompetences(checked, chapterID) {
    let suffix = "";
    suffix = (checked !== "All" ? ("?checked=" + checked) : suffix);
    suffix = (chapterID !== "All" ?
      (suffix !== "" ? suffix + "&chapterId=" + chapterID : "?chapterId=" + chapterID) : suffix);

    return this.getJsonFromApi(API_DATA.competences + suffix);
  }

  getChapter(info) {
    let suffix = "";
    suffix = (info !== "All" ? ("/" + info) : suffix);
    return this.getJsonFromApi(API_DATA.chapters + suffix);
  }

  getEdPlan(info) {
    let suffix = "";
    suffix = (info !== "All" ? ("/" + info) : suffix);
    return this.getJsonFromApi(API_DATA.edPlan + suffix);
  }

  putProfilePicture(id) {
    return this.putWithHeader(API_DATA.avatars + "/:" + id, "");
  }

}
