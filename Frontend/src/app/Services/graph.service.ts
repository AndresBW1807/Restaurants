import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  private serviceUrl = environment.endpoint
  constructor( private http: HttpClient ) { }

  getChecklisUsers(campusId: number){
    return this.http.get(this.serviceUrl + "/api/users/campus/" + campusId).pipe(map(r => {
      return r as any[]
    }))
  }

  getAssistance(campusId: number){
    return this.http.get(this.serviceUrl + "/api/checkList/" + campusId).pipe(map(r => {
      return r as any[]
    }))
  }
}
