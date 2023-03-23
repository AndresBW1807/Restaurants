import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutGuardService} from "./Services/rout-guard.service";
import {LoginComponent} from "./Components/login/login.component";


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent, canActivate: [RoutGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
