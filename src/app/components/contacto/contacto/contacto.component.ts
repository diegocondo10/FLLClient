import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

    constructor(
        private  router: Router
    ) {
    }

    ngOnInit() {
    }


    btnSuscribirme(input) {
        this.router.navigate(['/contactanos'], {
            queryParams: {
                correo: input.value
            }
        });
    }

}
