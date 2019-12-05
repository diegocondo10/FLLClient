import {Component, OnInit} from '@angular/core';
import {Interesado, Propiedad} from '../../../models/appCore';
import {PropiedadesService} from '../../../services/propiedades.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-contacto-form',
    templateUrl: './contacto-form.component.html',
    styleUrls: ['./contacto-form.component.css']
})
export class ContactoFormComponent implements OnInit {

    public interesado: Interesado = {};
    public propiedad: Propiedad;

    constructor(
        private srv: PropiedadesService,
        private router: Router,
        private route: ActivatedRoute,
    ) {
    }

    async ngOnInit() {
        this.interesado.propiedadId = this.route.snapshot.queryParams['propiedad'];
        if (this.interesado.propiedadId) {
            this.propiedad = await this.srv.getPropiedadById(this.interesado.propiedadId);
        }


    }

    async enviar() {
        await this.srv.agregarInteresado(this.interesado);
        if (this.propiedad) {
            await this.router.navigate(['propiedad', this.propiedad.id]);
            alert('SE HA ENVIADOR SU COMENTARIO');
        } else {
            await this.router.navigate(['']);
        }
    }
}
