import {Injectable} from "@angular/core";

@Injectable()
export class ContractModel {
  public campusId: number;
  public company: string;
  public id: number;


  constructor() {
    this.campusId = 0;
    this.company = "";
    this.id = 0;
  }
}
