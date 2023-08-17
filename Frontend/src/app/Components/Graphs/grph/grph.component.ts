import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../Services/users.service";
import {AuthService} from "../../../Services/auth.service";
import {checkListModel} from "../../../Models/checkList.model";
import {ChartType} from "angular-google-charts";

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-grph',
  templateUrl: './grph.component.html',
  styleUrls: ['./grph.component.css']
})
export class GrphComponent implements OnInit {
  userLogged: any;
  users: any[] = [];
  filteredUsers!: any[];
  SelectedUser: any;
  data: any[] = []
  options: any;
  view:[number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(
    private userService: UsersService,
    private AuthService: AuthService,
  ) {
    this.userLogged = AuthService.getLoggedUser();
  }

  ngOnInit() {
    this.data = [
        {
          "name": "Germany",
          "value": 8940000
        },
        {
          "name": "USA",
          "value": 5000000
        },
        {
          "name": "France",
          "value": 7200000
        },
        {
          "name": "UK",
          "value": 6200000
        }
    ];

    this.options = {
      // Configuración de opciones (por ejemplo, leyendas, colores, etc.)
    };
    this.userService.GetUserByCampus(this.userLogged.campus).subscribe(r => {
      this.users = r.map(persona => ({
        id: persona.id,
        nombreCompleto: `${persona.nameUser} ${persona.lastNameUser}`
      }));
    })
  }

  findIdByFullName(fullName: string): number | undefined {
    const personaEncontrada = this.users.find(persona =>
      persona.nombreCompleto === fullName
    );

    return personaEncontrada ? personaEncontrada.id : undefined;
  }

  filterUser(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.users as any[]).length; i++) {
      let user = (this.users as any[])[i];
      if (user.nombreCompleto.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(user);
      }
    }

    this.filteredUsers = filtered;
  }
}
