import { Routes } from '@angular/router';
// IMPORTANTE: Importa el Panel, no la Tragaperras suelta
import { PanelTragaperrasComponent } from './componentes/panel-tragaperras/panel-tragaperras.component';
import { ListadoAlumnosComponent } from './componentes/listado-alumnos/listado-alumnos.component';
import { AltaAlumnoComponent } from './componentes/alta-alumno/alta-alumno.component';

export const routes: Routes = [
  { path: 'paneltragaperras', component: PanelTragaperrasComponent },
  { path: 'listado-alumnos', component: ListadoAlumnosComponent },
  { path: 'alta-alumno', component: AltaAlumnoComponent },
  { path: '', redirectTo: '/paneltragaperras', pathMatch: 'full' },
  { path: '**', redirectTo: '/paneltragaperras' }
];