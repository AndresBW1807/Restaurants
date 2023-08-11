import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../Services/auth.service";
import {ContractService} from "../../../Services/contract.service";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit{
  userLogged: any;
  constructor(private AuthService: AuthService,
              private contractService: ContractService,) {
    this.userLogged = AuthService.getLoggedUser();
  }

  ngOnInit() {
    this.contractService.getContractByCampus(this.userLogged.campus).subscribe(r => {
      this.contractService.getServicesByContract(r.id).subscribe(s => {
        console.log(s)
      })
    })
  }
}
