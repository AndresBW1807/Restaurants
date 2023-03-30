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
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit{

  userCreate!: FormGroup
  document!: DocumentType[]
  roles: DocumentType[] = []

  constructor(private fb: FormBuilder, private rolService: RolsService){
  }

  ngOnInit(): void {


      this.rolService.getAllRoles().subscribe(r => {
        r.forEach((e: any) => {
          const rols = {
            name: e.nameRol,
            code: e.id
          }
          this.roles.push(rols)
        });
      })


      console.log(this.roles)
      this.document = [
        { name: 'Cedula de ciudadania', code: 'C.C' },
        { name: 'Tarjeta de identidad', code: 'T.I' },
    ];

    this.userCreate = this.initForm();
  }

  onSubmit(){

  }

  initForm(): FormGroup {
    return this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
