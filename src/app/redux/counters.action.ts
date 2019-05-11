import { Action } from '@ngrx/store';

export enum ActionsTypes {
  Increment = '[Counter] Increment',
  Decrement = '[Counter] Decrement',
  Reset = '[Counter] Reset',
}

export class Increment implements Action {
  readonly type = ActionsTypes.Increment;
}

export class Decrement implements Action {
  readonly type = ActionsTypes.Decrement;
}

export class Reset implements Action {
  readonly type = ActionsTypes.Reset;
}

export type ActionsUnion = Increment | Decrement | Reset;
