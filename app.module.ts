import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FristCompComponent } from './frist-comp/frist-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FristCompComponent,
    SecondCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
