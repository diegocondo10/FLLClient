import {Component, OnInit} from '@angular/core';
import {PropiedadesService} from '../../../services/propiedades.service';
import {Filtro, Propiedad} from '../../../models/appCore';

@Component({
  selector: 'app-propiedad-list',
  templateUrl: './propiedad-list.component.html',
  styleUrls: ['./propiedad-list.component.css']
})
export class PropiedadListComponent implements OnInit {


  propiedades: Propiedad[];

  constructor(
    private srv: PropiedadesService
  ) {
  }

  async ngOnInit() {

    this.propiedades = await this.srv.getPropiedades({limit: 5});
  }

  esPar(pos: number): boolean {
    return pos % 2 === 0;
  }

  async buscar($event: Filtro) {
    const result = await this.srv.getPropiedades(null, $event);
    console.log(result);
  }

}
