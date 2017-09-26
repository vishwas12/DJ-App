import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGaurdService implements CanActivate {

  isLoggedIn: boolean;

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate() {
    console.log('test');
    if (localStorage.cre && JSON.parse(localStorage.cre).access_token) {
      return true;
    }
    this.router.navigateByUrl('/home/login');
    return false;
  }

}
