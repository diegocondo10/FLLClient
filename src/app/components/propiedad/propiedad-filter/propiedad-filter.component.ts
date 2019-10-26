import {Component, OnInit} from '@angular/core';
import {PropiedadesService} from '../../../services/propiedades.service';
import {Filtro, Sector, TipoPropiedad} from '../../../models/appCore';

@Component({
  selector: 'app-propiedad-filter',
  templateUrl: './propiedad-filter.component.html',
  styleUrls: ['./propiedad-filter.component.css']
})
export class PropiedadFilterComponent implements OnInit {

  public filtro: Filtro = {
    idSector: null,
    idTipoPropiedad: null
  };

  public tiposPropeidad: TipoPropiedad[];
  public sectores: Sector[];


  constructor(
    private srv: PropiedadesService
  ) {
  }

  async ngOnInit() {
    const result = await this.srv.getFiltros();

    this.tiposPropeidad = result['tiposPropiedad'];
    this.sectores = result['sectores'];

  }

  async buscar() {
    this.filtro.lugar = this.filtro.codigo;
    console.log(this.filtro);
  }

}
