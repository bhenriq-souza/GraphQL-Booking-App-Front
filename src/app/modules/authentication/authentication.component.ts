import { Component, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState, selectAuthState } from '../../stores/states'
import { ResetAuthState } from '../../stores/actions';

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.scss"]
})
export class AuthenticationComponent implements OnInit {
  mode: string = '';
  state: any = {};
  getState: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe(state => this.state = state);
    this.mode = 'login';
  }

  onSwitchMode(mode: string): void {
    if (!this.state.isAuthenticated) {
      this.store.dispatch(new ResetAuthState());
    }
    this.mode = mode;
  }
}
