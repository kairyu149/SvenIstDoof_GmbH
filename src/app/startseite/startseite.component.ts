import { Component, OnInit } from '@angular/core';
import {BodyDynamicsService} from "../body-dynamics.service";

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.css']
})
export class StartseiteComponent implements OnInit {

  constructor(private bodyDynamics: BodyDynamicsService) { }

  ngOnInit() {
  }

}
