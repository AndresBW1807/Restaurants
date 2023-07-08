import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AssistanceModel} from "../Models/assistance.model";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CheckListService {

  private serviceUrl = environment.endpoint;
  constructor(
    private http: HttpClient
  ) { }

  postAssistance(Assistance: AssistanceModel){
    return this.http.post(this.serviceUrl + '/api/checkList', Assistance).pipe(map(res => { return res as AssistanceModel}))
  }
}
