import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutGuardService} from "./Services/rout-guard.service";
import {LoginComponent} from "./Components/login/login.component";
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { NavbarComponent } from './Components/navbar/navbar.component';



const routes: Routes = [
  { path: '', component: NavbarComponent},
  { path: 'login', component: LoginComponent, canActivate: [RoutGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
