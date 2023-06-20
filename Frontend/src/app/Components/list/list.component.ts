import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {UsersService} from "../../Services/users.service";
import {AuthService} from "../../Services/auth.service";
import {checkListModel} from "../../Models/checkList.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  value!: any;
  value2!: any;
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

  @ViewChild('inputElement') inputElement!: ElementRef;
  @ViewChild('inputElement2') inputElement2!: ElementRef;
  handleInputChange() {
    this.value = this.inputElement.nativeElement.value;
    this.value2 = this.inputElement2.nativeElement.value;
  }


  assistance(checkList: checkListModel) {
    console.log(checkList)
  }

  protected readonly event = event;
}
