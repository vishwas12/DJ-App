import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGaurdService implements CanActivate {

  isLoggedIn: boolean;

  constructor(private auth: AuthenticationService, private router: Router) {
    this.auth.isAuthenticated.subscribe(data => {
      this.isLoggedIn = data;
    });
   }

  canActivate() {
    console.log('test');
    if (!this.isLoggedIn) {
      this.router.navigateByUrl('/home/login');
    }
    return this.isLoggedIn;
  }

}
