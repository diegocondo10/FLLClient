import {Component, OnInit} from '@angular/core';
import {PropiedadesService} from '../../../services/propiedades.service';
import {Propiedad} from '../../../models/appCore';

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

    const propiedades = await this.srv.getPropiedades();
    console.log(propiedades);
  }

  esPar(pos: number): boolean {
    return pos % 2 === 0;
  }

}
