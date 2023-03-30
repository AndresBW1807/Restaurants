import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RolsService {
  private serviceUrl = environment.endpoint;

  constructor(private http: HttpClient) {}

  getAllRoles() {
    return this.http.get(this.serviceUrl + '/api/rol').pipe(
      map((r) => {
        return r as any;
      })
    );
  }
}
