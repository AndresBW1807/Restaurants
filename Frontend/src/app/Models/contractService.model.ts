import {Injectable} from "@angular/core";

@Injectable()
export class ContractServiceModel {
  id!: number;
  contracId!: number;
  serviceId!: number;
  service! : {
    id: number;
    data: string;
  };
}
