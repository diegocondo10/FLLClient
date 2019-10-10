import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import { GET_PROPIEDADES } from './queries';
import { Paginacion } from '../models/models';


@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {

  constructor(
    private apollo: Apollo
  ) { }


  public async getPropiedades(paginacion: Paginacion) {

    const query = await this.apollo.query({
      query: GET_PROPIEDADES,
      variables: {
        paginacion: {
          limit: 10,
          offset: 0
        }
      }
    });
    console.log(query);
    const promise = await query.toPromise();
    return promise.data;

  }


}
