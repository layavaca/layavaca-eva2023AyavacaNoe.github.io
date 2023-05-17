import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carrera } from 'src/app/domain/carrera';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  listadoCarreras: Carrera[]=[]

  constructor(private carreraService: CarreraService,
    private router: Router){
      this.listadoCarreras= carreraService.getLits()
      console.log('listadoCarrera', this.listadoCarreras)
    }


}
