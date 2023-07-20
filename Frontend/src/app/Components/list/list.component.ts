import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {UsersService} from "../../Services/users.service";
import {AuthService} from "../../Services/auth.service";
import {checkListModel} from "../../Models/checkList.model";
import {ContractService} from "../../Services/contract.service";
import {ContractServiceModel} from "../../Models/contractService.model";
import {AssistanceModel} from "../../Models/assistance.model";
import {CheckListService} from "../../Services/check-list.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  value!: any;
  value2!: any;
  userLogged: any;
  checkListUnassistance!: checkListModel[];
  checkListAttendance!: checkListModel[];
  assistances: AssistanceModel = new AssistanceModel();
  serviceList: any[] = [];
  InfNutritional! : string;
  contractId!: number;
  serviceId!: number
  Modal = false;
  Messages!: any[];

  constructor(
    private userService: UsersService,
    private AuthService: AuthService,
    private contractService: ContractService,
    private checkListService: CheckListService
  ) {
    this.userLogged = AuthService.getLoggedUser();
  }

  ngOnInit() {
    this.contractService.getContractByCampus(this.userLogged.campus).subscribe(r => {
      this.contractId = r.id;
      this.contractService.getServicesByContract(this.contractId).subscribe(s => {
        s.map(x => {
          this.serviceList.push(x.service.typeServiceId)
        })
        let currentHour = new Date().getHours();
        if (currentHour < 12 && this.serviceList.includes(1)) {
          this.contractService.getServicesByContractAndTypeService(this.contractId, 1).subscribe(r => {
            this.InfNutritional = r.service.data
            this.serviceId = r.serviceId
            this.cargarTablas()
          })
          return
        }
        if (currentHour >= 12 && currentHour < 18 && this.serviceList.includes(2)) {
          this.contractService.getServicesByContractAndTypeService(this.contractId, 2).subscribe(r => {
            this.InfNutritional = r.service.data
            this.serviceId = r.serviceId
            this.cargarTablas()
          })
          return
        }
        if (this.serviceList.includes(3)) {
          this.contractService.getServicesByContractAndTypeService(this.contractId, 3).subscribe(r => {
            this.InfNutritional = r.service.data
            this.serviceId = r.serviceId
            this.cargarTablas()
          })
          return
        }

      })
    })
  }


  @ViewChild('inputElement') inputElement!: ElementRef;
  @ViewChild('inputElement2') inputElement2!: ElementRef;

  handleInputChange() {
    this.value = this.inputElement.nativeElement.value;
    this.value2 = this.inputElement2.nativeElement.value;
  }

  cargarTablas(){
    console.log(this.serviceId)
    this.userService.GetUserByCampusUnassistence(this.userLogged.campus, this.serviceId).subscribe(r => {
      this.checkListUnassistance = r
    });
    this.userService.GetUserByCampusAttendance(this.userLogged.campus, this.serviceId).subscribe(r => {
      this.checkListAttendance = r
    });
  }


  assistance(checkList: checkListModel) {
    this.assistances.assistance = true;
    this.assistances.serviceId = this.serviceId;
    this.assistances.userId = checkList.id
    this.checkListService.postAssistance(this.assistances).subscribe(r => {
      this.ngOnInit();
      this.Modal = true;
      this.Messages = [ {
        severity: 'success',
        summary: 'Asistencia',
        detail: 'registrada con exito'
      }]
    })
    setTimeout(() => {
      this.Modal = false
      this.Messages = []
    },3000)
  }

  protected readonly event = event;
}
