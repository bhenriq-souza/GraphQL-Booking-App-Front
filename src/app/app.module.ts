import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';

/** Basic imports */
import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";

/** Services */
import { AuthenticationService, AuthGuardService } from './services';

/** Utils */
import { GraphQLUtils } from './utils';

/** Effects */
import { AuthEffects } from './stores/effects';

/** Reducers */
import { reducers } from './stores/states';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule],
  providers: [AuthenticationService, GraphQLUtils, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
