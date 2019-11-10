import {Component, OnInit} from '@angular/core';
import {PropiedadesService} from '../../../services/propiedades.service';
import {Filtro, Propiedad} from '../../../models/appCore';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-propiedad-list',
  templateUrl: './propiedad-list.component.html',
  styleUrls: ['./propiedad-list.component.css']
})
export class PropiedadListComponent implements OnInit {


  propiedades: Propiedad[];

  constructor(
    private srv: PropiedadesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  async ngOnInit() {
    const filtro = JSON.parse(this.route.snapshot.queryParamMap.get('filtro'));
    this.propiedades = await this.srv.getPropiedades({limit: 10}, filtro);
  }


  async buscarPropiedades($event) {
    this.propiedades = await this.srv.getPropiedades({limit: 10}, $event);
    this.router.navigate(['buscar']);
  }

  propiedadInfo(id: number) {
    this.router.navigate(['propiedad', id]);
  }

}
