import { createAction, createReducer, on, props } from '@ngrx/store';

export const setWrapper = createAction(
  '[Wrapper] Set Wrapper',
  (payload: boolean) => ({ payload })
);

export interface AppState {
  wrapper: boolean;
}

export const initialState: AppState = {
  wrapper: false,
};

export const dataReducer = createReducer(
  initialState,
  on(setWrapper, (state, wrapper) => ({ ...state }))
);
