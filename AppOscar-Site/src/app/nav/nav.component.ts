import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthServiceService } from '../_services/auth-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  nomeUsuario: string;
  foi: any;

  logado = false;

  constructor(  private router: Router,
                private msal: MsalService,
                private authService: AuthServiceService) { }

  ngOnInit() {
      if (this.authService.decodedToken ) {
        this.logado = true;
      }
  }

  logout() {
        this.msal.logout();
  }

}
