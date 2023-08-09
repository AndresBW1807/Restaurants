import {Injectable} from "@angular/core";

@Injectable()
export class UserModel {
  public id: number;
  public nameUser: string;
  public lastNameUser: string;
  public idNumber: string;
  public typeId: string;
  public password: string;
  public user: string;
  public RolId: number;
  public campushascourses_id: number;
  public activated: boolean;
  constructor() {
    this.id = 0;
    this.nameUser = "";
    this.lastNameUser = "";
    this.idNumber = "";
    this.typeId = "";
    this.password = "";
    this.user = "";
    this.RolId = 0;
    this.campushascourses_id = 0;
    this.activated = true;
  }
}
