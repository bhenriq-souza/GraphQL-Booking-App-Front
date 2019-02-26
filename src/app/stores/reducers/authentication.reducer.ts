import { AuthActionTypes, All } from '../actions';
import { User } from '../../models'

export interface State {
    isAuthenticated: boolean;
    user: User | null;
    errorMessages: string[] | null;
}

export const initialState: State = {
    isAuthenticated: false,
    user: null,
    errorMessages: null
}

export function reducer(state = initialState, action: All): State {
    switch (action.type) {
      case AuthActionTypes.RESET_AUTH_STATE: {
        return initialState;
      }
      case AuthActionTypes.LOGIN_SUCCESS: {
        return {
          ...state,
          isAuthenticated: true,
          user: {
            token: action.payload.data.login.token,
            userId: action.payload.data.login.userId
          },
          errorMessages: null
        };
      }
      case AuthActionTypes.LOGIN_FAILURE: {
        return {
          ...state,
          errorMessages: action.payload.errors
        }
      }
      default: {
        return state;
      }
    }
  }