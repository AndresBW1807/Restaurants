import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs';
import {environment} from 'src/environments/environment';
import {UserModel} from "../Models/user.model";
import {checkListModel} from "../Models/checkList.model";

interface RespuestaServicio {
  ok: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private serviceUrl = environment.endpoint;

  constructor(private http: HttpClient) {
  }

  addUser(user: UserModel) {
    return this.http.post<RespuestaServicio>(this.serviceUrl + '/api/users', user).pipe(map(res => {
      if (res.ok) {
        return true
      } else {
        return false
      }
    }))
  }

  GetUserByCampusUnassistence(CampusId: number, serviceId: number) {
    return this.http.get(this.serviceUrl + '/api/users/unassistance/campusId/' + CampusId + '/service/' + serviceId).pipe(map(res => {
      return res as checkListModel[]
    }))
  }

  GetUserByCampusAttendance(CampusId: number, serviceId: number) {
    return this.http.get(this.serviceUrl + '/api/users/Attendance/campusId/' + CampusId + '/service/' + serviceId).pipe(map(res => {
      return res as checkListModel[]
    }))
  }
}
