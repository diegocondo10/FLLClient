import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {GET_PROPIEDADES} from './queries';
import {Paginacion, Propiedad} from '../models/appCore';


@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {

  constructor(
    private apollo: Apollo
  ) {
  }


  public async getPropiedades(paginacion?: Paginacion): Promise<Propiedad[]> {
    const query = this.apollo.query({
      query: GET_PROPIEDADES,
      variables: {
        paginacion: paginacion
      }
    });
    const promise = await query.toPromise();


    return promise.data['appCore']['propiedades'];


  }


}
