import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState, selectAuthState } from '../stores/states'; 
import { environment } from 'src/environments/environment';
import { AuthenticationType, IAuthDTO } from '../models';
import { GraphQLUtils } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiURL = environment.api_server;
  private state: any = {};
  
  constructor(
    private http: HttpClient,
    private graphQLUtil: GraphQLUtils,
    private store: Store<AppState>
  ) { 
    this.store.select(selectAuthState).subscribe(state => this.state = state);
  }

  private auth(authType: AuthenticationType, data: IAuthDTO): Observable<any> {
    let graphQLQuery: any = {};
    switch (authType) {
      case 'login':
        graphQLQuery = this.graphQLUtil.generateGraphQLQuery('login', data);
        return this.http.post(this.apiURL, graphQLQuery);
      case 'registration':
        graphQLQuery = this.graphQLUtil.generateGraphQLQuery('registration', data);
        return this.http.post(this.apiURL, graphQLQuery);
      default:
        return null;
    }
  }

  isAuthenticated(): boolean {
    return this.state.isAuthenticated;
  }

  login(data: IAuthDTO): Observable<any> {
    return this.auth('login', data);
  }

  getToken(): string {
    return localStorage.get('graphql-course-token');
  }

  setToken(token): void {
    if (token) {
      localStorage.setItem('graphql-course-token', token);
    } else {
      localStorage.clear();
    }
  }
}
