import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { AuthenticationService } from '../../services';
import { AuthActionTypes, LogIn, LogInSuccess } from '../actions';

@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthenticationService,
    private router: Router,
  ) {}

  @Effect()
  LogIn: Observable<any> = this.actions
  .pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action: LogIn) => action.payload),
    switchMap(payload => {
      return this.authService.login(payload)
             .pipe(
                map( userData => new LogInSuccess(userData))
             )
    })
  );

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions
  .pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap(user => {
      console.log('success: ', user.payload);
    })
  );
}