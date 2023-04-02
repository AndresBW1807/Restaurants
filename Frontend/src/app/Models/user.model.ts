import {Injectable} from "@angular/core";

@Injectable()
export class UserModel {
  public nameUser: string;
  public lastNameUser: string;
  public idNumber: number;
  public typeId: string;
  public password: string;
  public user: string;
  public RolId: number;
  constructor() {
    this.nameUser = "";
    this.lastNameUser = "";
    this.idNumber = 0;
    this.typeId = "";
    this.password = "";
    this.user = "";
    this.RolId = 0;
  }
}
