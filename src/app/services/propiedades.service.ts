import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {FILTROS, FRAG_PROPIEDADES_HOME, PROPIEDADES_QUERY} from './queries';
import {Filtro, Paginacion, Propiedad} from '../models/appCore';


@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {

  constructor(
    private apollo: Apollo
  ) {
  }


  public async getPropiedades(paginacion?: Paginacion, filtros?: Filtro): Promise<Propiedad[]> {

    const query = this.apollo.query({
      query: PROPIEDADES_QUERY(FRAG_PROPIEDADES_HOME),
      variables: {
        paginacion: paginacion,
        filtros: filtros
      },
      fetchPolicy: 'no-cache'
    });
    const promise = await query.toPromise();
    return promise.data['appCore']['propiedades'];
  }


  public async getFiltros() {
    const query = this.apollo.query({
      query: FILTROS
    });
    const promise = await query.toPromise();

    return promise.data['appCore']['filtros'];
  }


}
