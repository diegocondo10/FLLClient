import {Component, OnInit} from '@angular/core';
import {PropiedadesService} from '../../../services/propiedades.service';
import {Filtro, Propiedad} from '../../../models/appCore';

@Component({
  selector: 'app-propiedad-list',
  templateUrl: './propiedad-list.component.html',
  styleUrls: ['./propiedad-list.component.css']
})
export class PropiedadListComponent implements OnInit {


  public propiedad: Propiedad;


  propiedades: Array<any> = [
    {
      pos: 1,
      img: ''
    },
    {
      pos: 2,
      img: ''
    },
    {
      pos: 3,
      img: ''
    },
    {
      pos: 4,
      img: ''
    },
    {
      pos: 5,
      img: ''
    }
  ];

  constructor(
    private srv: PropiedadesService
  ) {
  }

  async ngOnInit() {
    const paginacion = {
      limit: 1,
      offset: 0
    };
    const propiedades = await this.srv.getPropiedades(paginacion);
  }

  esPar(pos: number): boolean {
    return pos % 2 === 0;
  }

  async buscar($event: Filtro) {
    const result = await this.srv.getPropiedades(null, $event);
    console.log(result);
  }

}
