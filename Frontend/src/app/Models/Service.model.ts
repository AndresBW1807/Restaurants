import {Injectable} from "@angular/core";

@Injectable()
export class ServiceModel {
  public data: string;
  public date: Date;
  public description: string;
  public typeServiceId: number;


  constructor() {
    this.data = '';
    this.date = new Date();
    this.description = '';
    this.typeServiceId = 0;
  }
}
