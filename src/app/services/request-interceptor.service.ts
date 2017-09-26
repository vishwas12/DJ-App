import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /* if (req.url.includes('api.github.com')) {
      const clone = req.clone({ setHeaders: { 'Authorization': `Bearer ${OAUTH_TOKEN}` } });
    } */
    return next.handle(req);
  }

}
