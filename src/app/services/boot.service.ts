import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {MensajeBot} from '../models/appCore';


const MENSAJES_BOOT = gql`
{
  appCore {
    mensajesBot {
      id
      cliente
      mensaje
      importante
    }
  }
}
`;


@Injectable({
    providedIn: 'root'
})
export class BootService {

    constructor(
        private apollo: Apollo
    ) {
    }

    async getMensajesBoot(): Promise<MensajeBot[]> {
        const query = this.apollo.query({
            query: MENSAJES_BOOT,
            fetchPolicy: 'cache-first'
        });

        const promise = await query.toPromise();
        return promise['appCore']['mensajesBoot'];
    }
}
