import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState, selectAuthState } from '../../../stores/states';
import { LogIn } from '../../../stores/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: any = {};
  getState: Observable<any>;
  state: any = {};

  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe(state => this.state = state);
  }

  onLogin(): void {
    const payload = { ...this.data };
    this.store.dispatch(new LogIn(payload));
  }
}
