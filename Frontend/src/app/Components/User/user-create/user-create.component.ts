import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserModel} from "../../../Models/user.model";
import {UsersService} from "../../../Services/users.service";

interface DocumentType {
  name: string;
  value: string;
}
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  userCreate!: FormGroup;
  document!: DocumentType[];
  roles: any[] = [];
  user!: UserModel;
  Modal = false;
  Messages!: any[];
  sumbit= true;


  constructor(private fb: FormBuilder, private userService: UsersService) {}

  ngOnInit(): void {
    this.roles = [
      { name: 'Administrador', value: 1 },
      { name: 'Empleado', value: 2 },
      { name: 'Comensal', value: 3 },
    ];

    this.document = [
      { name: 'Cedula de ciudadania', value: 'C.C' },
      { name: 'Tarjeta de identidad', value: 'T.I' },
    ];

    this.userCreate = this.initForm();
  }

  onSubmit() {
    this.user = this.userCreate.value
    this.user.RolId = this.userCreate.value.RolId.value
    this.user.typeId = this.userCreate.value.typeId.value
    this.userService.addUser(this.user).subscribe( r => {
      this.Modal = true;
      this.Messages = [ {
        severity: 'success',
        summary: 'Registrado',
        detail: 'Usuario registrado con exito'
      }]
      this.userCreate.reset()
      this.sumbit = false;
    })
    if (!this.Messages){
      this.Modal == true;
      this.Messages = [ {
        severity: 'error',
        summary: 'No registrado',
        detail: 'EL usuario ya se registro anterirormente'
      }]
    }
    setTimeout(() => {
      this.Modal = false
    },5000)
  }

  initForm(): FormGroup {
    return this.fb.group({
      nameUser: ['', [Validators.required]],
      lastNameUser: ['', [Validators.required]],
      idNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{8,}$/)]],
      typeId: ['', [Validators.required]],
      user: ['',[Validators.required]],
      password: ['',[Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{6,}$/)]],
      RolId: ['', [Validators.required]],
    });
  }
}
