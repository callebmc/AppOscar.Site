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

  constructor(  private router: Router,
                private msal: MsalService,
                private authService: AuthServiceService) { }

  ngOnInit() {
      this.nomeUsuario = this.msal.getUser().name;
  }

  logout() {
        this.msal.logout();
  }

}
