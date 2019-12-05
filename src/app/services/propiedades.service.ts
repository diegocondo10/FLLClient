import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {
    AGREGAR_INTERESADO,
    FILTROS,
    FRAG_PROPIEDADES_HOME,
    GET_PROPIEDAD_BY_ID, PROPIEDADES_HOME, PROPIEDADES_QUERY
} from './queries.graphql';
import {Filtro, Interesado, Paginacion, Propiedad, Sorters} from '../models/appCore';


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


    public async agregarInteresado(input: Interesado) {
        const mutation = this.apollo.mutate({
            mutation: AGREGAR_INTERESADO,
            variables: {
                input: input
            }
        });

        return await mutation.toPromise();
    }


    public textoHtml(texto: string) {
        let newTexto = '';
        for (let i = 0; i < texto.length; i++) {
            if (texto.charCodeAt(i) === 10) {
                newTexto += '<br>';
            } else {
                newTexto += texto.charAt(i);
            }
        }
        return newTexto;
    }

}
