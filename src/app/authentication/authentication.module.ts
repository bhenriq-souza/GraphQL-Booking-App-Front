import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthenticationRoutingModule } from "./authentication.routing.module";

import { AuthenticationComponent } from "./authentication.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [CommonModule, AuthenticationRoutingModule]
})
export class AuthenticationModule {}
