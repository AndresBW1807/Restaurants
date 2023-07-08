import {Injectable} from "@angular/core";

@Injectable()
export class AssistanceModel {
  public assistance: boolean;
  public date: Date;
  public serviceId!: number;
  public userId!: number;

  constructor() {
    this.assistance = false;
    this.date = new Date();
  }
}
