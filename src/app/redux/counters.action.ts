import {Action} from '@ngrx/store';

export enum ActionsTypes {
  Increment = '[Counter] Increment',
  Decrement = '[Counter] Decrement',
  Change = '[Counter] Change',
}

export class Increment implements Action {
  readonly type = ActionsTypes.Increment;
}

export class Decrement implements Action {
  readonly type = ActionsTypes.Decrement;
}

export class Change implements Action {
  readonly type = ActionsTypes.Change;
}

