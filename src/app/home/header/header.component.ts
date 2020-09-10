import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { getCurrencySymbol } from '@angular/common';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(private keycloak: KeycloakService) {
  }

  login(){
    this.keycloak.login({
      redirectUri: window.location.origin + "/shops",
    });
  }

}
