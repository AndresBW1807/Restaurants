import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder,){
  }

  ngOnInit(): void {
      this.userCreate = this.initForm();
      this.document = [
        { name: 'Cedula de ciudadania', code: 'C.C' },
        { name: 'Tarjeta de identidad', code: 'T.I' },
    ];
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
