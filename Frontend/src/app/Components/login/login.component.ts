import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../Services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthModel} from "../../Models/auth.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  Login!: FormGroup;
  error: boolean = true
  token: any
  dates = new AuthModel()
  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) {
  }
  ngOnInit(){
    this.Login = this.initForm()
  }
  onSubmit(){
    this.authService.login(this.Login.value.user, this.Login.value.password).subscribe( r => {
      this.token = r
      if(r){
        this.router.navigate(["/login"])
        this.error = true
      }
    }
    )
    if(!this.token){
      this.error = false
    }
  }

  initForm():FormGroup{
    return this.fb.group({
      user: ["",[Validators.required]],
      password: ["", [Validators.required]]
    })
  }

}
