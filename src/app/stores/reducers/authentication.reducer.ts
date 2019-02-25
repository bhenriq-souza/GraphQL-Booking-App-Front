import { AuthActionTypes, All } from '../actions';
import { User } from '../../models'

export interface State {
    isAuthenticated: boolean;
    user: User | null;
    errorMessage: string | null;
}

export const initialState: State = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
}

export function reducer(state = initialState, action: All): State {
    switch (action.type) {
      case AuthActionTypes.LOGIN_SUCCESS: {
        return {
          ...state,
          isAuthenticated: true,
          user: {
            token: action.payload.data.login.token,
            userId: action.payload.data.login.userId
          },
          errorMessage: null
        };
      }
      default: {
        return state;
      }
    }
  }