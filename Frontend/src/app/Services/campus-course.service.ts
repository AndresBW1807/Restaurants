import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {map} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CampusCourseService {
  private serviceUrl = environment.endpoint;

  constructor(private http: HttpClient) {
  }

  getAllCourseForCampus(idCampus: Number) {
    return this.http.get(this.serviceUrl + '/api/campusCourse/' + idCampus ).pipe(
      map((r) => {
        return r as any;
      })
    );
  }
}
