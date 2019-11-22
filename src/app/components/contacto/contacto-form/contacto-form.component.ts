import {Component, OnInit} from '@angular/core';
import {Interesado} from '../../../models/appCore';

@Component({
    selector: 'app-contacto-form',
    templateUrl: './contacto-form.component.html',
    styleUrls: ['./contacto-form.component.css']
})
export class ContactoFormComponent implements OnInit {

    public interesado: Interesado = {};

    constructor() {
    }

    ngOnInit() {
    }

    enviar() {
        console.log(this.interesado);
    }
}
