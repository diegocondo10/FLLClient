import {Component, Input, OnInit} from '@angular/core';
import {PropiedadesService} from '../../../services/propiedades.service';
import {Filtro, Paginacion, Propiedad} from '../../../models/appCore';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-propiedad-list',
    templateUrl: './propiedad-list.component.html',
    styleUrls: ['./propiedad-list.component.css']
})
export class PropiedadListComponent implements OnInit {

    @Input()
    paginacion: Paginacion = {limit: 10};

    propiedades: Propiedad[];

    constructor(
        private srv: PropiedadesService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    async ngOnInit() {
        const filtro = JSON.parse(this.route.snapshot.queryParamMap.get('filtro'));
        this.propiedades = await this.srv.getPropiedades(this.paginacion, filtro);
    }


    async buscarPropiedades($event) {
        this.propiedades = await this.srv.getPropiedades({limit: 10}, $event);
        this.router.navigate(['buscar']);
    }

    propiedadInfo(id: number) {
        this.router.navigate(['propiedad', id]);
    }

}
