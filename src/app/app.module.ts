import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckedListComponent } from './checked-list/checked-list.component';
import { CheckedListItemComponent } from './checked-list-item/checked-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckedListComponent,
    CheckedListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
