import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
      const token = this.authService.getToken();
      if(token){
        const authReq = req.clone({
          headers: req.headers.set('Authorization', `${token}`)
        })
        return next.handle(authReq);
      }
      return next.handle(req);
  }
}
