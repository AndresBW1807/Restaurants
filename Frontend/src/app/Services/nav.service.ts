import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private serviceUrl = environment.endpoint

  constructor(
    private http: HttpClient
  ) { }

  getMenusRol(roleId: any){
    return this.http.get(this.serviceUrl + "/api/rolMenu/" + roleId).pipe(map(r => {
     return r as any[]
    }))
  }

}
