import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PropiedadesService} from '../../../services/propiedades.service';
import {Filtro, Sector, TipoPropiedad} from '../../../models/appCore';

@Component({
  selector: 'app-propiedad-filter',
  templateUrl: './propiedad-filter.component.html',
  styleUrls: ['./propiedad-filter.component.css']
})
export class PropiedadFilterComponent implements OnInit {


  @Output() buscar = new EventEmitter<Filtro>();

  protected filtro: Filtro = {
    idSector: null,
    idTipo: null
  };


  protected tiposPropeidad: TipoPropiedad[];
  protected sectores: Sector[];


  constructor(
    private srv: PropiedadesService
  ) {
  }

  async ngOnInit() {
    const result = await this.srv.getFiltros();
    this.tiposPropeidad = result['tiposPropiedad'];
    this.sectores = result['sectores'];
  }

  protected async buscarPropiedades() {
    this.filtro.lugar = this.filtro.codigo;

    if (this.filtro.idSector === 'null') {
      this.filtro.idSector = null;
    }
    if (this.filtro.idTipo === 'null') {
      this.filtro.idSector = null;
    }
    this.buscar.emit(this.filtro);

  }


}
