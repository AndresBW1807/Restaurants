import { Component } from '@angular/core';
import {AuthService} from "../../Services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthModel} from "../../Models/auth.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Login!: FormGroup
  dates = new AuthModel()
  constructor(private authService: AuthService,
              private fb: FormBuilder) {
  }
  ngOnInit(){
    this.Login = this.initForm()
  }
  onSubmit(){
    this.authService.login(this.Login.value.user, this.Login.value.password).subscribe()
  }

  initForm():FormGroup{
    return this.fb.group({
      user: ["",[Validators.required]],
      password: ["", [Validators.required]]
    })
  }

}
