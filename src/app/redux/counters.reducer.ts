import {Action} from '@ngrx/store';
import {ActionsTypes} from './counters.action';
import {AppState} from './app.state';

export const initialState: AppState = {
  first: -5,
  second: 10
};

export function countersReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionsTypes.Increment:
      return {
        ...state,
        first: state.first + 1
      };
    case ActionsTypes.Decrement:
      return {
        ...state,
        second: state.second - 1
      };
    case ActionsTypes.Change:
      return state;
    default:
      return initialState;
  }
}

