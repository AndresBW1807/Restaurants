import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AssistanceModel} from "../Models/assistance.model";
import {map} from "rxjs";
import {checkListModel} from "../Models/checkList.model";

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

  postUnassistance(CampusId: number, serviceId: number) {
    return this.http.post(this.serviceUrl + '/api/users/unassistance/campusId/' + CampusId + '/service/' + serviceId, {}).pipe(map(res => { return res as AssistanceModel}))
  }
}
