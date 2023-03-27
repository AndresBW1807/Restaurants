import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit{

  userCreate!: FormGroup

  constructor(private fb: FormBuilder,){
  }

  ngOnInit(): void {
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
