import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from '../redux/app.state';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  state: Observable<AppState>;

  constructor(private store: Store<{count: AppState}>) {
    this.state = store.pipe(
     select('count')
    );
  }

  ngOnInit() {
  }
}
