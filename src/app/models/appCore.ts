export interface Paginacion {
  limit?: number;
  offset?: number;
}

export interface Persona {
  id?: number;
  identificacion?: string;
  nombre?: string;
  apellido?: string;
  celular?: string;
  telefono?: string;
  activo?: boolean;
  propiedadSet?: Propiedad[];
}

export interface TipoPropiedad {
  id?: number;
  nombre?: string;
  activo?: boolean;
}

export interface Sector {
  id?: number;
  nombre?: string;
  activo?: boolean;
}


export interface Propiedad {
  id?: number;
  persona?: Persona;
  tipoPropiedad?: TipoPropiedad;
  sector?: Sector;
  codigo?: string;
  callePrincipal?: string;
  calleSecundaria?: string;
  numeroCasa?: string;
  areaTotal?: number;
  medidaFrente?: number;
  medidaAtras?: number;
  medidaIzquierdo?: number;
  medidaDerecho?: number;
  areaConstruccion?: number;
  precioPromocional?: number;
  precioFijo?: number;
  observacion?: string;
  estado?: 'DISPONIBLE' | 'VENDIDO';
  activo?: boolean;
  // captadorSet?: [CaptadorType]
  propiedadfotoSet?: PropiedadFoto[];
  // ventaSet?: [VentaType]
}


export interface PropiedadFoto {
  id?: number;
  propiedad?: Propiedad;
  principal?: boolean;
  url?: string;
  activo?: boolean;
}


export interface Filtro {
  minimo?: number;
  maximo?: number;
  codigo?: string;
  lugar?: string;
  idTipoPropiedad?: number;
  idSector?: number;

}
