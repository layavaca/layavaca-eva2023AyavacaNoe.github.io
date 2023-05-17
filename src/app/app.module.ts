import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './pages/cabecera/cabecera.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ListaComponent } from './pages/lista/lista.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { CarreraComponent } from './pages/carrera/carrera.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    ListaComponent,
    AcercaDeComponent,
    CarreraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
