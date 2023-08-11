import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UsersService} from "../../../Services/users.service";
import {checkListModel} from "../../../Models/checkList.model";
import {AuthService} from "../../../Services/auth.service";
import {UserModel} from "../../../Models/user.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  value!: any;

  userLogged: any;
  users!: checkListModel[];

  constructor(
    private userService: UsersService,
    private AuthService: AuthService,
    private router: Router) {
    this.userLogged = AuthService.getLoggedUser();
  }

  ngOnInit() {
    this.userService.GetUserByCampus(this.userLogged.campus).subscribe(r => this.users = r)
  }

  @ViewChild('inputElement') inputElement!: ElementRef;


  handleInputChange() {
    this.value = this.inputElement.nativeElement.value;
  }

  onUpdateUser(user: UserModel) {
    this.userService.setSelectedUser(user);
    this.router.navigate(['/userCreate']);
  }

}
