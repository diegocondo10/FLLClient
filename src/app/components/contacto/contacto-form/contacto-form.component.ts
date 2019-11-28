import {Component, OnInit} from '@angular/core';
import {Interesado} from '../../../models/appCore';
import {PropiedadesService} from '../../../services/propiedades.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-contacto-form',
    templateUrl: './contacto-form.component.html',
    styleUrls: ['./contacto-form.component.css']
})
export class ContactoFormComponent implements OnInit {

    public interesado: Interesado = {};

    constructor(
        private srv: PropiedadesService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.interesado.propiedadId = this.route.snapshot.queryParams['propiedad'];
    }

    async enviar() {
        await this.srv.agregarInteresado(this.interesado);
        await this.router.navigate(['']);
    }
}
