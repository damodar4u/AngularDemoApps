import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TableComponent } from './table/table.component';
import { RegformComponent } from './regform/regform.component';
import { LogformComponent } from './logform/logform.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TableComponent,
    RegformComponent,
    LogformComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
