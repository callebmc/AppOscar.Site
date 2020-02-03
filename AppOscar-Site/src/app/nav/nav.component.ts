import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  nomeUsuario: string;

  constructor(  private router: Router,
                private msal: MsalService) { }

  ngOnInit() {
      this.nomeUsuario = this.msal.getUser().name;
  }

  logout() {
      this.msal.logout();
  }

}
