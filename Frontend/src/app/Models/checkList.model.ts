import {Injectable} from "@angular/core";

@Injectable()
export class checkListModel {
  public nameUser: string;
  public lastNameUser: string;
  public id: number;
  public idNumber: number;

  constructor() {
    this.id = 0;
    this.idNumber = 0;
    this.nameUser = "";
    this.lastNameUser = "";
  }
}
