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

    filtro: Filtro = {
        idSector: null,
        idTipo: null
    };


    tiposPropeidad: TipoPropiedad[];
    sectores: Sector[];


    constructor(
        private srv: PropiedadesService
    ) {
    }

    async ngOnInit() {
        const result = await this.srv.getFiltros();
        this.tiposPropeidad = result['tiposPropiedad'];
        this.sectores = result['sectores'];
    }

    async buscarPropiedades() {

        if (this.filtro.idSector === 'null') {
            this.filtro.idSector = null;
        }
        if (this.filtro.idTipo === 'null') {
            this.filtro.idTipo = null;
        }
        this.buscar.emit(this.filtro);

        this.filtro.aguja = '';
    }

    navBuscar(id: number) {
        this.filtro.idTipo = id;
        this.buscarPropiedades();
    }


}
