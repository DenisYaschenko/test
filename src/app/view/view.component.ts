import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {interval, Observable} from 'rxjs';
import {AppState} from '../redux/app.state';
import {Decrement, Increment, Change} from '../redux/counters.action';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  state: Observable<AppState>;
  intervalSub$;

  constructor(private store: Store<{count: AppState}>) {
    this.state = store.pipe(
     select('count')
    );
  }

  ngOnInit() {
  }

  start() {
    this.intervalSub$ = interval(1000).subscribe(() => {
      this.store.dispatch(new Change());
    });
  }

  stop() {
    if (this.intervalSub$) {
      this.intervalSub$.unsubscribe();
    }
  }
}
