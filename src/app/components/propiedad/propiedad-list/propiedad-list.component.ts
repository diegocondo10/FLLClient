import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../../../services/propiedades.service';
import { Propiedad } from '../../../models/appCore';

@Component({
  selector: 'app-propiedad-list',
  templateUrl: './propiedad-list.component.html',
  styleUrls: ['./propiedad-list.component.css']
})
export class PropiedadListComponent implements OnInit {


  public propiedades: Propiedad[]

  constructor(
    private srv: PropiedadesService
  ) { }

  async ngOnInit() {
    this.propiedades = await this.srv.getPropiedades()
    console.log(this.propiedades);
  }

}
