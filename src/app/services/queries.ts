import gql from 'graphql-tag';
import {Fragment} from '../models/appCore';

export const GET_PROPIEDADES = gql`
query buscarPropiedades($paginacion: Paginacion, $filtros: FiltrosPropiedades) {
  appCore {
    propiedades(paginacion: $paginacion, filtros: $filtros) {
      id
      codigo
      propiedadfotoSet {
        id
        url
      }
      tipoPropiedad{
        id
        nombre
      }
      persona {
        nombre
        apellido
        telefono
      }
      sector {
        nombre
      }
      callePrincipal
      calleSecundaria
    }
  }
}
`;

export const FILTROS = gql`
{
  appCore {
    filtros {
      tiposPropiedad {
        id
        nombre
      }
      sectores {
        id
        nombre
      }
    }
  }
}
`;

export const FRAG_PROPIEDADES_HOME: Fragment = {
  name: 'infoHome',
  content: `
  fragment infoHome on PropiedadType {
  id
  observacion(limit:-1)
  urlFotoPrincipal
  precioPromocional
  callePrincipal
  calleSecundaria
  sector {
    id
    nombre
  }
}

  `
};


export const PROPIEDADES_QUERY = (fragment: Fragment): any => {
  return gql`
query buscarPropiedades($paginacion: Paginacion, $filtros: FiltrosPropiedades) {
  appCore {
    propiedades(paginacion: $paginacion, filtros: $filtros) {
      ...${fragment.name}
    }
  }
}

${fragment.content}
  `;
};
