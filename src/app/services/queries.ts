import gql from 'graphql-tag';

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
