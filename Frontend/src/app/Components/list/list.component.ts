import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../Services/users.service";
import {AuthService} from "../../Services/auth.service";
import {checkListModel} from "../../Models/checkList.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  userLogged: any;
  checkList!: checkListModel[];
  assistCheck = true
  constructor(
    private userService: UsersService,
    private AuthService: AuthService
  ) {
    this.userLogged = AuthService.getLoggedUser();
  }

  ngOnInit() {
    this.userService.GetUserByCampus(this.userLogged.campus).subscribe(r => {
      this.checkList = r
    });
  }

  assistance(checkList: checkListModel) {
    console.log(checkList)
  }
}
