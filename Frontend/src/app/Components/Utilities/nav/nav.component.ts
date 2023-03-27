import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TokenModel } from 'src/app/Models/auth.model';
import { AuthService } from 'src/app/Services/auth.service';
import { NavService } from '../../../Services/nav.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  
  items!: MenuItem[];
  userLogged!: TokenModel;

  constructor(private navService: NavService, private authService: AuthService) {
    this.userLogged = this.authService.getLoggedUser();
  }

  ngOnInit() {
    this.navService.getMenusRol(this.userLogged.RolId).subscribe((menus) => {
      const observables = menus.map(m => this.navService.getSubMenus(m.menuId));
      forkJoin(observables).subscribe(subMenusArray => {
        this.items = [];
        menus.forEach((m, index) => {
          const subItems = subMenusArray[index].map(sm => ({
            label: sm.nameSubMenu,
            path: sm.pathSubMenu
          }));
          const menu = {
            label: m.menu.nameMenu,
            icon: m.menu.iconMenu,
            items: subItems
          };
          this.items.push(menu);
        });
      });
    });
  }

  Logout(){
    this.authService.logout();
  }
}