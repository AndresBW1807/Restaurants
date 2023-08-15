import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../Services/auth.service";
import {ContractService} from "../../../Services/contract.service";
import {ListServiceService} from "../../../Services/list-service.service";
import {NavService} from "../../../Services/nav.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ServiceModel} from "../../../Models/Service.model";
import {ServiceService} from "../../../Services/service.service";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  userLogged: any;
  ListService: any[] = [];
  visible: boolean = false;
  title = 'Crear Servicio'
  Messages!: any[];
  nutritionalForm!: FormGroup;
  mealTypes: any[] = []
  Service!: ServiceModel;

  constructor(private AuthService: AuthService,
              private fb: FormBuilder,
              private contractService: ContractService,
              private serviceService: ServiceService,
              private ListeServiceService: ListServiceService,
              private NavService: NavService) {
    this.userLogged = AuthService.getLoggedUser();
  }

  ngOnInit() {
    this.mealTypes = [
      {label: 'Desayuno', value: 1},
      {label: 'Almuerzo', value: 2},
      {label: 'Comida', value: 3},
      {label: 'Refrigerio', value: 4}
    ]
    this.form();
    this.loadtable();
  }

  onSubmit() {
    this.Service = this.nutritionalForm.value
    this.Service.date = new Date();
    this.contractService.getContractByCampus(this.userLogged.campus).subscribe(r => {
      this.serviceService.PostService(this.Service, r.id).subscribe(r => {
        this.Messages = [{
          severity: 'success',
          summary: 'Registrado',
          detail: 'Servicio registrado con exito'
        }]
        this.NavService.modal = false
      })
      if (!this.Messages || this.Messages.length == 0) {
        this.Messages = [{
          severity: 'error',
          summary: 'No actualizado',
          detail: 'El servicio no se pudo guardar'
        }]
      }
      setTimeout(() => {
        this.Messages = []
      }, 2000);
    })
  }

  form() {
    this.nutritionalForm = this.fb.group({
      typeServiceId: ['', Validators.required],
      data: ['', Validators.required],
    });
  }

  loadtable() {
    this.contractService.getContractByCampus(this.userLogged.campus).subscribe(r => {
      this.ListeServiceService.getServicesByContract(r.id).subscribe(s => {
        this.ListService = s
      })
    })
  }

  showDialog() {
    this.visible = true;
  }
}
