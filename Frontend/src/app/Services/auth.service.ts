import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private serviceUrl = environment.endpoint
  private isLoggedIn = false

  constructor(
    private http: HttpClient
  ) { }

  login(user: string, password: string): Observable<any> {
    return this.http.post(this.serviceUrl + "/api/auth/login", { user, password }).pipe(map((r: any) => {
      if(r.token){
        const token = r.token
        localStorage.setItem("token", token)
        this.isLoggedIn = true
        return token
      }else{
        return "usuario no valido"
      }
    }));
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedIn = false
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}