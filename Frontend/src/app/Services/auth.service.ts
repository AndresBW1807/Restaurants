import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private serviceUrl = environment.endpoint
  private isLoggedIn = false

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  login(user: string, password: string): Observable<any> {
    return this.http.post(this.serviceUrl + "/api/auth/login", { user, password }).pipe(map((r: any) => {
      if(r.token){
        const token = r.token
        localStorage.setItem("token", token)
        return token
      }else{
        return "usuario no valido"
      }
    }));
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getLoggedUser(){
    const token = this.getToken();
    if(token){
      const decode = this.jwtHelper.decodeToken(token)
      return decode
    }
    return "no existe token"
  }

  getToken(){
    return localStorage.getItem('token');
  }
}