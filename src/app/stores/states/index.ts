import { createFeatureSelector } from '@ngrx/store';
import * as auth from '../reducers';

export interface AppState {
    authState: auth.State;
}

export const reducers = {
    auth: auth.reducer
}

/** selectors */
export const selectAuthState = createFeatureSelector<AppState>('auth');