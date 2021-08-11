import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CheckedListComponent} from './checked-list/checked-list.component';
import {CheckedListItemComponent} from './checked-list-item/checked-list-item.component';
import {NestedCheckedListComponent} from './nested-checked-list/nested-checked-list.component';
import {NestedCheckedListItemComponent} from './nested-checked-list-item/nested-checked-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckedListComponent,
    CheckedListItemComponent,
    NestedCheckedListComponent,
    NestedCheckedListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
