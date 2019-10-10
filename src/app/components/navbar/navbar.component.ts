import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../../services/propiedades.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private srv: PropiedadesService
  ) { }

  async ngOnInit() {
    console.log("HOLA MUNDO");
    console.log(await this.srv.getPropiedades({ limit: 10, offset: 0 }));
  }

}
