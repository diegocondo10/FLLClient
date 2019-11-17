import {Component, OnInit} from '@angular/core';
import {Propiedad} from '../../../models/appCore';
import {PropiedadesService} from '../../../services/propiedades.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public propiedades: Propiedad[];


    constructor(private srv: PropiedadesService) {
    }

    async ngOnInit() {

        this.propiedades = await this.srv.getPropiedadesHome(
            {
                estado: 'Disponible'
            },
            {
                sorters: ['prioridad_desc']
            },
            {
                limit: 5, offset: 0
            }
        );
        console.log(this.propiedades);
    }

}
