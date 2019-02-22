import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

/** Angular material */
import { MatButtonModule } from '@angular/material';

/** Routing */
import { AuthenticationRoutingModule } from "./authentication.routing.module";

/** Components */
import { AuthenticationComponent } from "./authentication.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";



@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule,
    MatButtonModule
  ]
})
export class AuthenticationModule { }
