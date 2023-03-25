import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TokenModel } from 'src/app/Models/auth.model';
import { AuthService } from 'src/app/Services/auth.service';
import { NavService } from '../../Services/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  
  items!: MenuItem[];
  userLogged!: TokenModel

  constructor(private navService: NavService, private authService: AuthService) {
    this.userLogged = this.authService.getLoggedUser();
  }

  ngOnInit() {
    this.navService.getMenusRol(this.userLogged.RolId).subscribe((menus) => {
      this.items = [];
      menus.forEach((m) => {
        const menus = {
          label: m.menu.nameMenu,
          icon: m.menu.iconMenu,
        };
        this.items.push(menus);
      });
    });
  }
}
