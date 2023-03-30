import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolsService } from 'src/app/Services/rols.service';

interface DocumentType {
  name: string;
  code: string;
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

  constructor(private fb: FormBuilder, private rolService: RolsService) {}

  ngOnInit(): void {
    this.roles = [
      { name: 'Seleccione un Rol', code: "" },
      { name: 'Administrador', code: 1 },
      { name: 'Empleado', code: 2 },
      { name: 'Comensal', code: 3 },
    ];

    this.document = [
      { name: "Seleccione su tipo de documento", code: "" },
      { name: 'Cedula de ciudadania', code: 'C.C' },
      { name: 'Tarjeta de identidad', code: 'T.I' },
    ];

    this.userCreate = this.initForm();
  }

  onSubmit() {}

  initForm(): FormGroup {
    return this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
