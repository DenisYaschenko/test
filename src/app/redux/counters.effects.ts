import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ActionsTypes, Decrement, Increment} from './counters.action';
import {switchMap} from 'rxjs/operators';

@Injectable()
export class CountersEffects {
  constructor(private actions$: Actions) {}

  @Effect() start = this.actions$.pipe(
    ofType(ActionsTypes.Change),
    switchMap(() => [
      new Increment(),
      new Decrement(),
      new Decrement()
    ])
  );
}
