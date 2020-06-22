import {Component, OnInit} from '@angular/core';
import {Paginacion, Propiedad} from '../../../models/appCore';
import {PropiedadesService} from '../../../services/propiedades.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public propiedades: Propiedad[];
  public paginacion: Paginacion = {limit: 4};

  constructor(private srv: PropiedadesService, private router: Router) {
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
    // console.log(this.propiedades);
  }


}
