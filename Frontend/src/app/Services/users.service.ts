import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs';
import {environment} from 'src/environments/environment';
import {UserModel} from "../Models/user.model";
import {checkListModel} from "../Models/checkList.model";
import { BehaviorSubject } from 'rxjs';

interface RespuestaServicio {
  ok: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private serviceUrl = environment.endpoint;
  private selectedUser: any;

  constructor(private http: HttpClient) {
  }

  setSelectedUser(user: any) {
    this.selectedUser = user
  }

  getSelectedUser() {
    return this.selectedUser
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

  updateUser(user: UserModel, userId: number) {
    return this.http.put<RespuestaServicio>(this.serviceUrl + '/api/users/updateUser/' + userId , user).pipe(map(res => {
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

  GetUserByCampus(CampusId: number) {
    return this.http.get(this.serviceUrl + '/api/users/' + CampusId ).pipe(map(res => {
      return res as checkListModel[]
    }))
  }
}
