import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';

const rootUrl = `${environment.ws_domain_url}`;

@Injectable()
export class UtilityApiServiceService {

  constructor(private http: HttpClient) { }

  forgotPassword(data) {
    const url: string = rootUrl + '/api/forgotPassword';
    const params = new HttpParams().set('email', data);
    return this.http.post(url, null, {params});
  }

  verifyEmail(uuid, userType, userId) {
    const url: string = rootUrl + '/api/verifyEmail';
    const params = new HttpParams().set('code', uuid)
                                    .set('type', userType)
                                    .set('id', userId);
    return this.http.get(url, {params});
  }

  verifyPasswordLink(uuid, userType, userId) {
    const url: string = rootUrl + '/api/verifyPasswordLink';
    const params = new HttpParams().set('code', uuid)
                                    .set('type', userType)
                                    .set('id', userId);
    return this.http.get(url, {params});
  }

}
