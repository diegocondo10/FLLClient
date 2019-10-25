import gql from 'graphql-tag';

export const GET_PROPIEDADES = gql`
query buscarPropiedades($paginacion: Paginacion) {
  appCore {
    propiedades(paginacion: $paginacion) {
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
