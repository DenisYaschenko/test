import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {countersReducer} from './redux/counters.reducer';

import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter.component';
import {ViewComponent} from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count: countersReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
