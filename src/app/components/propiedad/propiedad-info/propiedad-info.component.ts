import {Component, OnInit} from '@angular/core';
import {PropiedadesService} from '../../../services/propiedades.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Propiedad} from '../../../models/appCore';

@Component({
    selector: 'app-propiedad-info',
    templateUrl: './propiedad-info.component.html',
    styleUrls: [
        './propiedad-info.component.css',
        '../propiedad-list/propiedad-list.component.css'
    ]
})
export class PropiedadInfoComponent implements OnInit {

    public propiedad: Propiedad;


    constructor(
        private srv: PropiedadesService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    async ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.propiedad = await this.srv.getPropiedadById(id);
    }

    buscar($event) {
        this.router.navigate(['/buscar'], {
            queryParams: {
                filtro: JSON.stringify($event)
            }
        });
    }

}
