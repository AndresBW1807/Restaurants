import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Components/Utilities/login/login.component";
import { UserCreateComponent } from './Components/User/user-create/user-create.component';
import { AuthGuardService } from './Services/auth-guard.service';
import {ListComponent} from "./Components/list/list.component";
import {ListUserComponent} from "./Components/User/list-user/list-user.component";
import {ListServiceComponent} from "./Components/Service/list-service/list-service.component";
import {GrphComponent} from "./Components/Graphs/grph/grph.component";




const routes: Routes = [
  { path: '', redirectTo: 'GraphAdm', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'userCreate', component: UserCreateComponent, canActivate: [AuthGuardService]},
  { path: 'checkList', component: ListComponent, canActivate: [AuthGuardService]},
  { path: 'ListUser', component: ListUserComponent, canActivate: [AuthGuardService]},
  { path: 'ListService', component: ListServiceComponent, canActivate: [AuthGuardService]},
  { path: 'GraphAdm', component: GrphComponent, canActivate: [AuthGuardService]},
];
//, canActivate: [AuthGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
