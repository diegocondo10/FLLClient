import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-fab-redes',
    templateUrl: './fab-redes.component.html',
    styleUrls: ['./fab-redes.component.css']
})
export class FabRedesComponent implements OnInit {

    fabButtons = [
        {
            icon: '../../../../assets/facebook.png',
            link: 'https://www.facebook.com/people/Flora-Grupo-Fll/100010468062385'
        },
        {
            icon: '../../../../assets/whatsapp.png',
            link: 'https://api.whatsapp.com/send?phone=593985942758'
        },
    ];
    buttons = [];
    fabTogglerState = 'inactive';

    constructor() {
    }

    ngOnInit(): void {
    }

    showItems() {
        this.fabTogglerState = 'active';
        this.buttons = this.fabButtons;
    }

    hideItems() {
        this.fabTogglerState = 'inactive';
        this.buttons = [];
    }

    onToggleFab() {
        this.buttons.length ? this.hideItems() : this.showItems();
    }

}
