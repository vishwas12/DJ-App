import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

const rootUrl = `${environment.ws_domain_url}`;

@Injectable()
export class VendorApiserviceService {

  constructor(private http: HttpClient) { }

  getCategoriesList() {
    const url: string = rootUrl + '/api/categoryList';
    return this.http.get(url);
  }

  registerVendor(data) {
    const url: string = rootUrl + '/vendor/Signup';
    return this.http.post(url, data).catch(this.handleError);
  }

  getBasicDetails() {
    const url: string = rootUrl + '/vendor/details';
    return this.http.get(url).catch(this.handleError);
  }

  getLocations(areaCode) {
    const url: string = rootUrl + '/api/fetchByPincode';
    const params = new HttpParams().set('pinCode', areaCode);
    return this.http.get(url, {params}).catch(this.handleError);
  }

  getAllStates() {
    const url: string = rootUrl + '/api/getStates';
    return this.http.get(url).catch(this.handleError);
  }

  getCitiesByState(stateId) {
    const url: string = rootUrl + '/api/getCitiesByStateId';
    const params = new HttpParams().set('stateId', stateId);
    return this.http.get(url, {params}).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
