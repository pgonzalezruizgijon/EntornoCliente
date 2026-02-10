import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'inicio', 
    pathMatch: 'full'
  },
  {
    path:"inicio",
    component : InicioComponent
  },
  {
    path:"listado-productos",
    component : ListadoProductosComponent
  },
  {
    path:"acerca-de",
    component : AcercaDeComponent
  },
  {
    path: '**',
    component: Pagina404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
