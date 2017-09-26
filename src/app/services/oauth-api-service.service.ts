import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

const rootUrl = `${environment.auth_domain_url}`;

@Injectable()
export class OauthApiServiceService {

  constructor(private http: HttpClient) { }

  saveToken(request) {
    const url = rootUrl + '/oauth/token';
    const str = [];
    let auth = '';
    for (const p in request) {
      if (p.indexOf('$') === -1) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(request[p]));
      }
    }

    for (let i = 1; i <= str.length; i++) {
      if (i === str.length) {
        auth += str[i - 1];
      }else {
        auth += str[i - 1] + '&';
      }
    }

    return this.http.post(url, auth, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  refreshToken(request) {
    const url = rootUrl + '/oauth/token';
    const str = [];
    let auth = '';
    for (const p in request) {
      if (p.indexOf('$') === -1) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(request[p]));
      }
    }

    for (let i = 1; i <= str.length; i++) {
      if (i === str.length) {
        auth += str[i - 1];
      }else {
        auth += str[i - 1] + '&';
      }
    }

    return this.http.post(url, auth, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

}
