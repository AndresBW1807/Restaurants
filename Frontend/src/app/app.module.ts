import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//----------------Components------------------------
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';

// --------------------PrimeNg-----------------------
import { AutoCompleteModule } from "primeng/autocomplete";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import {ButtonModule} from 'primeng/button';
import {HttpClientModule} from "@angular/common/http";
import {MessageModule} from "primeng/message";
import {JwtHelperService, JwtModule} from "@auth0/angular-jwt";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
