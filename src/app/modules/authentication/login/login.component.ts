import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../stores/states';
import { LogIn } from '../../../stores/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: any = {};

  constructor(private store: Store<AppState>) { }

  ngOnInit() { }

  onLogin(): void {
    const payload = { ...this.data };
    this.store.dispatch(new LogIn(payload));
  }
}
