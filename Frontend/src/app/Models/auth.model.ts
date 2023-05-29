import {Injectable} from "@angular/core";

@Injectable()
export class TokenModel {
  public userName: string;
  public userLastName: string;
  public RolId: number;
  public  campushascourses_id: number

  constructor() {
    this.RolId = 0;
    this.campushascourses_id = 0;
    this.userName = "";
    this.userLastName = "";
  }
}
