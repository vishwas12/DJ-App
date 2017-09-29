import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {

  constructor(private route: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.cre && JSON.parse(localStorage.cre).access_token) {
      console.log(JSON.parse(localStorage.cre).access_token);
      const clone = req.clone({ setHeaders: { 'Authorization': 'bearer ' + JSON.parse(localStorage.cre).access_token } });
      return next.handle(clone)
      .do(event => {
        if (event instanceof HttpResponse) {
          // console.log(event);
        }
      })
      .catch(err => {
        console.log('Caught error', err);
        if (err.status === 401) {
          // this.auth.cleanStorageData();
          this.route.navigateByUrl('/home/login');
        }
        return Observable.throw(err);
      });
    }
    // return next.handle(req);
    return next.handle(req)
    .do(event => {
      if (event instanceof HttpResponse) {
        // console.log(event);
      }
    })
    .catch(err => {
      console.log('Caught error', err);
      return Observable.throw(err);
    });
  }

}
