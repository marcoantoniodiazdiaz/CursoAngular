import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitulosComponent } from './components/titulos/titulos.component';
import { PersonasComponent } from './components/personas/personas.component';

@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
