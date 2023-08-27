import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../Services/users.service";
import {AuthService} from "../../../Services/auth.service";
import {GraphService} from "../../../Services/graph.service";

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

  /*Grafica 3*/
  multi2: any[] = []
  legend: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  timeline: boolean = true;
  /*--------------*/

  /*Grafica 2*/
  multi: any[] = []
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  legendTitle: string = 'Years';
  colorScheme2 = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  /*--------------*/
  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;
  userLogged: any;
  users: any[] = [];
  filteredUsers!: any[];
  SelectedUser: any;
  data: any[] = []
  options: any;
  view: [number, number] = [700, 400];

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
    private graphService: GraphService
  ) {
    this.userLogged = AuthService.getLoggedUser();
  }

  ngOnInit() {
    this.graphOne();
    this.graphTwo();
    this.graphThree();
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

  graphOne() {
    this.graphService.getChecklisUsers(this.userLogged.campus).subscribe(r => {
      r.forEach(x => {
        if (x.service.typeServiceId === 1) {
          this.count1 = this.count1 + 1;
        }
        if (x.service.typeServiceId === 2) {
          this.count2 = this.count2 + 1;
        }
        if (x.service.typeServiceId === 3) {
          this.count3 = this.count3 + 1;
        }
        if (x.service.typeServiceId === 4) {
          this.count4 = this.count4 + 1;
        }
      })

      this.data = [
        {
          "name": "Desayuno",
          "value": this.count1
        },
        {
          "name": "Almuerzo",
          "value": this.count2
        },
        {
          "name": "Comida",
          "value": this.count3
        },
        {
          "name": "Refrigerio",
          "value": this.count4
        }
      ];
    })
  }

  graphTwo() {
    const serviceIdToName = {
      1: "Desayuno",
      2: "Almuerzo",
      3: "Comida",
      4: "Refrigerio"
    };
    const multi: any[] = []
    this.graphService.getAssistance(this.userLogged.campus).subscribe(r => {
      for (const typeServiceId in serviceIdToName) {
        if (serviceIdToName.hasOwnProperty(typeServiceId)) {
          // @ts-ignore
          const serviceName = serviceIdToName[typeServiceId];
          const series = [];

          // Iterar a través de los años
          for (const year in r) {
            if (r.hasOwnProperty(year)) {
              const value = r[year].filter((item: any) => item.service.typeServiceId === parseInt(typeServiceId)).length;
              series.push({"name": year, "value": value});
            }
          }
          multi.push({
            "name": serviceName,
            "series": series
          });
        }
        this.multi = multi
      }
    })
  }

  graphThree(){
    const multi: any[] = []
    this.graphService.getAssistance(this.userLogged.campus).subscribe(r => {
      const series = [];
      for (const year in r) {
        if (r.hasOwnProperty(year)) {
          const assistanceCount = r[year].length;
          series.push({
            "name": year,
            "value": assistanceCount
          });
        }
        multi.push({
          "name": "Asistencias",
          "series": series
        });
      }
      this.multi2 = multi
    })
  }
}
