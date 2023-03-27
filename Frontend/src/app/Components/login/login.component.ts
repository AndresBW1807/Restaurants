import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthModel } from 'src/app/Models/token.model';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  Login!: FormGroup;
  error: boolean = true;
  token: any;
  dates = new AuthModel();
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this.Login = this.initForm();
  }
  onSubmit() {
    this.authService
      .login(this.Login.value.user, this.Login.value.password)
      .subscribe((r) => {
        this.token = r;
        if (r) {
          this.router.navigate(['/userCreate']);
          this.error = true;
        }else{
          this.error = false
        }
      });
  }

  initForm(): FormGroup {
    return this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
