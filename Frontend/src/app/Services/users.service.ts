import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import {UserModel} from "../Models/user.model";

interface RespuestaServicio {
  ok: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private serviceUrl = environment.endpoint;
  constructor(private http: HttpClient) { }

  addUser(user: UserModel){
    return this.http.post<RespuestaServicio>(this.serviceUrl + '/api/users', user).pipe(map(res => {
      if (res.ok){
        return true
      } else {
        return false
      }
    }))
  }
}
