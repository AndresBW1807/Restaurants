import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {JwtModule} from "@auth0/angular-jwt";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { InterceptorService } from './Services/interceptor.service';


//----------------Components------------------------
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Utilities/login/login.component';
import { UserCreateComponent } from './Components/User/user-create/user-create.component';
import { NavComponent } from './Components/Utilities/nav/nav.component';



// --------------------PrimeNg-----------------------
import { AutoCompleteModule } from "primeng/autocomplete";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import {ButtonModule} from 'primeng/button';
import {MessageModule} from "primeng/message";
import {PanelMenuModule} from 'primeng/panelmenu';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    UserCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MessageModule,
    PanelMenuModule,
    FieldsetModule,
    DropdownModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        }
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
