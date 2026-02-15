import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoDadoComponent } from './juego-dado/juego-dado.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SelectorNumericoComponent } from './selector-numerico/selector-numerico.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  { path: 'dado', component: JuegoDadoComponent },
  { path: 'cronometro', component: CronometroComponent },
  { path: 'selector', component: SelectorNumericoComponent },
  { path: '', redirectTo: '/dado', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', component: Pagina404Component }      // Ruta para errores (404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }