import {Injectable} from "@angular/core";

@Injectable()
export class TokenModel {
  public userName: string;
  public userLastName: string;
  public RolId: string;

  constructor() {
    this.RolId = "";
    this.userName = "";
    this.userLastName = "";
  }
}
