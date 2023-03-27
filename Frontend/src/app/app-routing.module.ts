import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Components/login/login.component";
import { NavComponent } from './Components/nav/nav.component';
import { UserCreateComponent } from './Components/user-create/user-create.component';
import { AuthGuardService } from './Services/auth-guard.service';




const routes: Routes = [
  { path: '', redirectTo: 'userCreate', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'userCreate', component: UserCreateComponent, canActivate: [AuthGuardService]},
];
//, canActivate: [AuthGuard] 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
