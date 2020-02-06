import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

    jwtHelper = new JwtHelperService();
    decodedToken: any;
    constructor() { }


    login() {
        this.decodedToken = this.jwtHelper.decodeToken(sessionStorage.getItem('msal.idtoken'));
    }

    logoutApi() {
        localStorage.removeItem('msal.idtoken');
        localStorage.removeItem('msal.idtoken');
        this.decodedToken = null;
    }

}
