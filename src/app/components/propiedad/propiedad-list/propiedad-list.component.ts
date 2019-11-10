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

    this.propiedades = await this.srv.getPropiedades({limit: 10});
    console.log(this.propiedades);
  }

  esPar(pos: number): boolean {
    return pos % 2 === 0;
  }


}
