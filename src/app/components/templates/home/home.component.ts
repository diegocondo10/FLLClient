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

        this.propiedades = await this.srv.getPropiedades({limit: 4}, null);
        console.log(this.propiedades);
    }

}
