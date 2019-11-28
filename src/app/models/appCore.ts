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
    urlFotoPrincipal?: string;
    estado?: 'Dispobible' | 'Vendido' | 'Reservado' | null;
    activo?: boolean;
    propiedadfotoSet?: PropiedadFoto[];
    prioridad?: number;
    titulo?: string;
    urlVideo?: string;
    provincia?: string;
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
    aguja?: string;
    idTipo?: number | 'null';
    idSector?: number | 'null';
    estado?: 'Disponible' | 'Vendido' | 'Reservado' | null;
}

export interface Sorters {
    sorters: ['prioridad' | 'fecha_registro' | 'precio' | 'prioridad_desc' | 'precio_desc' | 'fecha_registro_desc'];
}


export interface Fragment {
    name?: string;
    content?: string;
}

export interface Interesado {
    id?: number;
    propiedadId?: Propiedad;
    nombre?: string;
    correo?: string;
    telefono?: string;
    mensaje?: string;
    fechaIngreso?: Date;
    elim?: boolean;

}

export interface MensajeBot {
    id?: number;
    cliente?: string;
    fecha_ingreso?: Date;
    mensaje?: string;
    importante?: boolean;
    visto?: boolean;
    elim?: boolean;
}

export interface MensajeInput {
    ip?: string;
    mensaje?: string;
}
