import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoDadoComponent } from './juego-dado/juego-dado.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SelectorNumericoComponent } from './selector-numerico/selector-numerico.component';
import { Pagina404Component } from './pagina404/pagina404.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoDadoComponent,
    CronometroComponent,
    SelectorNumericoComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
