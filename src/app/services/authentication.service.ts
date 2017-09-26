import { Injectable } from '@angular/core';

import { OauthApiServiceService } from './oauth-api-service.service';
import { UtilityApiServiceService } from './utility-api-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

const properties = `${environment}`;

@Injectable()
export class AuthenticationService {

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private OauthApiServiceService: OauthApiServiceService, private UtilityApiServiceService: UtilityApiServiceService,
    private route: Router) {
      this.cleanStorageData();
    }

  login(email: string, password: string) {
    const auth: any = {
      grant_type: `${environment.grant_type}`,
      username: email,
      password: password,
      client_id: `${environment.auth_client_id}`,
      client_secret: `${environment.auth_secret}`
    };

    this.doOAuth(auth);
  }

  forgotPassword(email: string) {
    return this.UtilityApiServiceService.forgotPassword(email).subscribe(data => {
      console.log(data);
    });
  }

  doOAuth(auth) {
    this.OauthApiServiceService.saveToken(auth).subscribe((response: any) => {
      if (response) {
        this.cleanStorageData();
        this.setAuthenticationData(response);
        this.setRoles(response);
        this.isAuthenticatedSubject.next(true);
        if (response.roles[0] === 'ROLE_VENDOR') {
          this.route.navigateByUrl('/vendor/details/user');
        }else if (response.roles[0] === 'ROLE_USER') {

        }
      }else {
        console.log('Authentication Failed');
      }
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('An error occurred:', err.error.message);
      } else {
        console.log(`Backend returned code ${err.status}, body was: ${err.error.error_description}`);
      }
    });
  }

  setAuthenticationData(data) {
    const cre: any = {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      token_type: data.token_type
    };
    localStorage.setItem('cre', JSON.stringify(cre));
  }

  setRoles(data) {
    localStorage.setItem('roles', data.roles);
  }

  cleanStorageData() {
    localStorage.clear();
    this.isAuthenticatedSubject.next(false);
  }

}
