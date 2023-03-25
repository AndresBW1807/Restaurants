import {Injectable} from "@angular/core";

@Injectable()
export class AuthModel {
  public password: string;
  public user: string;
  constructor() {
    this.password = "";
    this.user = "";
  }
}