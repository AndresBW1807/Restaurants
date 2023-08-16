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
  Update = false;


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


  updateService(service: ServiceModel){
    this.title = 'Actualizar Servicio'
    this.nutritionalForm.patchValue(service);
    this.visible = true;
    this.Update = true;
    this.Service = service;
  }

  deleteService(service: ServiceModel){
    this.serviceService.DeleteService(service.id).subscribe( r => {
      this.Messages = [{
        severity: 'success',
        summary: 'Eliminado',
        detail: 'Servicio eliminado con exito'
      }]
      this.ngOnInit();
    })
    if (!this.Messages || this.Messages.length == 0) {
      this.Messages = [{
        severity: 'error',
        summary: 'No eliminado',
        detail: 'El servicio no se pudo eliminar'
      }]
    }
    setTimeout(() => {
      this.Messages = []
    }, 2000);
  }

  onSubmit() {
    if (this.Update){
      this.Service.date = new Date();
      this.Service.data = this.nutritionalForm.get('data')?.value
      this.contractService.getContractByCampus(this.userLogged.campus).subscribe(r => {
        this.serviceService.PutService(this.Service, r.id).subscribe(r => {
          this.Messages = [{
            severity: 'success',
            summary: 'Actualizado',
            detail: 'Servicio actualizado con exito'
          }]
          this.visible = false
          this.ngOnInit();
        })
        if (!this.Messages || this.Messages.length == 0) {
          this.Messages = [{
            severity: 'error',
            summary: 'No regsitrado',
            detail: 'El servicio no se pudo actualizar'
          }]
          this.visible = false
          this.ngOnInit();
        }
        setTimeout(() => {
          this.Messages = []
        }, 2000);
      })
    } else {
      this.Service = this.nutritionalForm.value
      this.Service.date = new Date();
      this.contractService.getContractByCampus(this.userLogged.campus).subscribe(r => {
        this.serviceService.PostService(this.Service, r.id).subscribe(r => {
          this.Messages = [{
            severity: 'success',
            summary: 'Registrado',
            detail: 'Servicio registrado con exito'
          }]
          this.visible = false
          this.ngOnInit();
        })
        if (!this.Messages || this.Messages.length == 0) {
          this.Messages = [{
            severity: 'error',
            summary: 'No registrado',
            detail: 'El servicio no se pudo guardar, por favor revise si ya existe el tipo de servicio'
          }]
          this.visible = false
          this.ngOnInit();
        }
        setTimeout(() => {
          this.Messages = []
        }, 2000);
      })
    }
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
    this.title = 'Crear Servicio'
    this.visible = true;
    this.Update =  false;
  }
}
