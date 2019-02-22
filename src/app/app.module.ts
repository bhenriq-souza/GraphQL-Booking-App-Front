import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from "@angular/core";
import { } from '@ngrx/store';
import { } from '@ngrx/store-devtools';

/** Basic imports */
import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";

/** Services */
import { AuthenticationService } from './services';

/** Utils */
import { GraphQLUtils } from './utils';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule],
  providers: [AuthenticationService, GraphQLUtils],
  bootstrap: [AppComponent]
})
export class AppModule { }
