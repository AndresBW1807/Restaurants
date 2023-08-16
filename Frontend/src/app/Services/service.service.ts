import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import {ServiceModel} from "../Models/Service.model";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private serviceUrl = environment.endpoint;

  constructor(private http: HttpClient) {

  }

  PostService(Service: ServiceModel ,ContractId: number) {
    return this.http.post(this.serviceUrl + '/api/contractService/' + ContractId, Service).pipe(
      map((r) => {
        return r as ServiceModel;
      })
    );
  }
  PutService(Service: ServiceModel ,ContractId: number) {
    return this.http.put(this.serviceUrl + '/api/contractService/' + ContractId, Service).pipe(
        map((r) => {
          return r as ServiceModel;
        })
    );
  }

  DeleteService(ServiceId: number) {
    return this.http.delete(this.serviceUrl + '/api/contractService/' + ServiceId).pipe(
      map((r) => {
        return r as ServiceModel;
      })
    );
  }
}
