import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {FILTROS, FRAG_PROPIEDADES_HOME, GET_PROPIEDAD_BY_ID, PROPIEDADES_HOME, PROPIEDADES_QUERY} from './queries';
import {Filtro, Paginacion, Propiedad, Sorters} from '../models/appCore';


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

    async getPropiedadesHome(filtros: Filtro, sorters?: Sorters, paginacion?: Paginacion): Promise<Propiedad[]> {
        const query = this.apollo.query({
            query: PROPIEDADES_HOME,
            variables: {
                filtros: filtros,
                sorters: sorters,
                paginacion: paginacion
            }
        });
        const promise = await query.toPromise();
        return promise.data['appCore']['propiedades'];
    }


    public async getPropiedadById(id: number) {

        const query = this.apollo.query({
            query: GET_PROPIEDAD_BY_ID,
            variables: {
                propiedadId: id
            }
        });

        const promise = await query.toPromise();
        return promise.data['appCore']['propiedad'];

    }


    public async getFiltros() {
        const query = this.apollo.query({
            query: FILTROS
        });
        const promise = await query.toPromise();
        return promise.data['appCore']['filtros'];
    }


}
