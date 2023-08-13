import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../Services/auth.service";
import {ContractService} from "../../../Services/contract.service";
import {ListServiceService} from "../../../Services/list-service.service";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit{
  userLogged: any;
  ListService: any[] = [];
  visible: boolean = false;
  title = 'Crear Servicio'

  constructor(private AuthService: AuthService,
              private contractService: ContractService,
              private ListeServiceService: ListServiceService) {
    this.userLogged = AuthService.getLoggedUser();
  }

  ngOnInit() {
    this.contractService.getContractByCampus(this.userLogged.campus).subscribe(r => {
      this.ListeServiceService.getServicesByContract(r.id).subscribe(s => {
        this.ListService = s
        console.log(this.ListService)
      })
    })
  }

  showDialog() {
    this.visible = true;
  }
}
