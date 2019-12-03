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
  observacion(limit:90)
  urlFotoPrincipal
  precioPromocional
  titulo
  sector {
    id
    nombre
  }
  tipoPropiedad{
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
      observacion(limit:-1)
      precioPromocional
      callePrincipal
      calleSecundaria
      areaTotal
      areaConstruccion
      urlFotoPrincipal
      urlVideo
      provincia
      titulo
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


export const PROPIEDADES_HOME = gql`
{
  appCore {
    propiedades(sorters: [prioridad_desc]) {
      id
      titulo
      urlFotoPrincipal
    }
  }
}
`;


export const AGREGAR_INTERESADO = gql`
mutation agregarInteresado($input: InteresadoInput) {
  appCore {
    interesado(input: $input) {
      interesado {
        id
        nombre
      }
    }
  }
}
`;


