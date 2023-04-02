import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import {UserModel} from "../Models/user.model";
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private serviceUrl = environment.endpoint;
  constructor(private http: HttpClient) { }

  addUser(user: UserModel){
    return this.http.post(this.serviceUrl + '/api/users', user).pipe(map(res => res as UserModel))
  }
}
