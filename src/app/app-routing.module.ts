import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'agenda-electronica', loadChildren: './agenda-electronica/agenda-electronica.module#AgendaElectronicaPageModule' },
  { path: 'nuevo-elemento', loadChildren: './nuevo-elemento/nuevo-elemento.module#NuevoElementoPageModule' },
  { path: 'libreta-contactos', loadChildren: './libreta-contactos/libreta-contactos.module#LibretaContactosPageModule' },
  { path: 'nuevo-contacto', loadChildren: './nuevo-contacto/nuevo-contacto.module#NuevoContactoPageModule' },
  { path: 'acerca-de', loadChildren: './acerca-de/acerca-de.module#AcercaDePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}