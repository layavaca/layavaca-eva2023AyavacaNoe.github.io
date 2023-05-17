import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './pages/lista/lista.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { CarreraComponent } from './pages/carrera/carrera.component';

const routes: Routes = [
  {path: 'lista', component : ListaComponent},
  {path: 'acerca-de', component : AcercaDeComponent},
  {path: 'carrera', component : CarreraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
