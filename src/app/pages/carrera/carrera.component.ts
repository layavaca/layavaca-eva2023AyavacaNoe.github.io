import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carrera } from 'src/app/domain/carrera';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.scss']
})
export class CarreraComponent {

  carrera: Carrera = new Carrera();

  constructor(private carreraService: CarreraService,
    private router: Router) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      console.log(params)
      this.carrera = new Carrera()
      this.carrera = params['carrera']

    }
  }
  guardar() {
    console.log(this.carrera)
    this.carreraService.save(this.carrera)
    this.carrera = new Carrera()
  }  

}
