import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {environment} from "../../environments/environment";
import {ContractModel} from "../Models/contract.model";
import {ContractServiceModel} from "../Models/contractService.model";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private serviceUrl = environment.endpoint

  constructor(
    private http: HttpClient
  ) { }

  getContractByCampus(campusId: number){
    return this.http.get(this.serviceUrl + "/api/contract/" + campusId).pipe(map(r => {
      return r as ContractModel
    }))
  }
  getServicesByContract(contracId: number){
    return this.http.get(this.serviceUrl + "/api/contractService/" + contracId).pipe(map(r => {
      return r as any[]
    }))
  }

  getServicesByContractAndTypeService(contracId: number, typeService: number){
    return this.http.get(this.serviceUrl + "/api/contractService/contrac/" + contracId + '/typeService/' + typeService).pipe(map(r => {
      return r as ContractServiceModel
    }))
  }
}
