import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './_services/auth-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AppOscar-Site';

  jwtHelper = new JwtHelperService();

  constructor(private authService: AuthServiceService) {}

  ngOnInit() {
      const token = localStorage.getItem('msal.idtoken');
      if (token) {
          this.authService.decodedToken = this.jwtHelper.decodeToken(token);
      }
  }
}
