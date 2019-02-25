import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { environment } from 'src/environments/environment';
import { AuthenticationType, IAuthDTO } from '../models';
import { GraphQLUtils } from '../utils';
import { AppState } from '../stores/states';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiURL = environment.api_server;

  constructor(
    private http: HttpClient,
    private graphQLUtil: GraphQLUtils,
    private state: Store<AppState>
  ) { }

  private auth(authType: AuthenticationType, data: IAuthDTO): Observable<any> {
    switch (authType) {
      case 'login':
        const graphQLQuery: any = this.graphQLUtil.generateGraphQLQuery('login', data);
        if (graphQLQuery) {
          return this.http.post(this.apiURL, graphQLQuery);
        } else {
          return null;
        }
      case 'registration':
        return this.graphQLUtil.generateGraphQLQuery('registration', data);
      default:
        return null;
    }
  }

  login(data: IAuthDTO): Observable<any> {
    return this.auth('login', data);
  }

  get token() {
    return localStorage.get('graphql-course-token');
  }

  set token(token: string) {
    if (token) {
      localStorage.setItem('graphql-course-token', token);
    } else {
      localStorage.clear();
    }
  }
}
