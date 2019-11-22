import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {MensajeBot, MensajeInput} from '../models/appCore';
import { HttpClient } from '@angular/common/http';

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

const ENVIAR_MENSAJE = gql`
mutation enviarMensaje($input: MensajeBootInput) {
  appCore {
    mensajeBoot(input: $input) {
      mensaje {
        id
        cliente
      }
    }
  }
}
`;

@Injectable({
    providedIn: 'root'
})
export class BootService {

    constructor(
        private apollo: Apollo,
        private http: HttpClient
    ) {
    }

    getIpAddress() {
      return this.http.get<any>('https://api.ipify.org/?format=json');
    }

    async getMensajesBoot(): Promise<MensajeBot[]> {
        const query = this.apollo.query({
            query: MENSAJES_BOOT,
            fetchPolicy: 'cache-first'
        });

        const promise = await query.toPromise();
        return promise['appCore']['mensajesBoot'];
    }

    async enviarMensaje(input: MensajeInput) {
        const mutation = this.apollo.mutate({
            mutation: ENVIAR_MENSAJE,
            variables: {
                input: input
            }
        });

        const promise = await mutation.toPromise();
        return promise['appCore']['mensajeBoot'];

    }
}
