import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  private serviceUrl = environment.endpoint

  constructor(private http: HttpClient) { }

  getServicesByContract(contracId: number){
    return this.http.get(this.serviceUrl + "/api/contractService/service/" + contracId).pipe(map(r => {
      return r as any[]
    }))
  }

}
