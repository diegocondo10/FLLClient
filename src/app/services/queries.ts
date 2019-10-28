import gql from 'graphql-tag';
import {Fragment} from '../models/appCore';


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


export const GET_PROPIEDAD_BY_ID = gql`

query buscarPropiedad($propiedadId: ID!) {
  appCore {
    propiedad(propiedadId: $propiedadId) {
      id
      observacion
      precioPromocional
      callePrincipal
      calleSecundaria
      areaTotal
      areaConstruccion
      urlFotoPrincipal
      tipoPropiedad {
        id
        nombre
      }
      sector {
        nombre
      }
      propiedadfotoSet {
        id
        url
      }
    }
  }
}

`;
