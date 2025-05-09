export type EstadoAvaluo = 'borrador' | 'finalizado';

export interface Propietario {
  propietario: string;
  tipoIdentificacion: string;
  numeroIdentificacion: string;
}

export interface InmuebleObjetoAvaluo {
  escrituraPublica: string;
  modoAdquisicion: string;
  matriculaInmobiliaria: string;
  fichaInmobiliaria: string;
  codigoCatastral: string;
}

export interface TipoInmueble {
  tipo: string;
  regimen: string;
  zona: string;
}

export interface DireccionDestinacionEconomica {
  direccion: string;
  destinacionEconomica: string;
  imagen: string;
  descripcion: string;
}

export interface CertificadoTradicionLibertad {
  pin: string;
  fechaImpreso: string;
  horaImpresion: string;
  matriculaInmobiliaria: string;
  propietario: string;
}

export interface EscrituraPublica {
  numero: string;
  fecha: string;
  matriculaInmobiliaria: string;
  propietario: string;
}

export interface ImpuestoPredial {
  periodoFacturado: string;
  fecha: string;
  matriculaFicha: string;
  codigoCatastral: string;
  direccion: string;
  propietario: string;
}

export interface Fachadas {
  frontal: string;
  posterior: string;
  lateralIzquierda: string;
  lateralDerecha: string;
}

export interface AspectosJuridicos {
  inmuebleObjetoAvaluo: InmuebleObjetoAvaluo;
  propietarios: Propietario[];
  tipoInmueble: TipoInmueble;
  direccionYdestinacionEconomica: DireccionDestinacionEconomica;
  certificadoTradicionLibertad: CertificadoTradicionLibertad;
  escrituraPublica: EscrituraPublica;
  impuestoPredial: ImpuestoPredial;
  fachadas: Fachadas;
}

export interface InformacionGeneral {
  fechaEntrega: string;
  fechaVisita: string;
  vigenciaAvaluo: string;
  solicitante: string;
  departamento: string;
  municipio: string;
  barrioVereda: string;
  objetoAvaluo: string;
  destinoAvaluo: string;
  responsabilidadesAvaluador: string[];
}

export interface FormaGeometricaYDimensionDelPredio {
  formaTerreno: string;
  anchoTerreno: number;
  largoTerreno: number;
  areaTerreno: number;
}

export interface ViasAcceso {
  descripcion: string;
  acceso: Record<string, boolean>;
  imagen: string[];
  vias: string[];
}

export interface TransportePublico {
  descripcion: string;
  tiposTransporte: Record<string, boolean>;
  frecuenciaOperacion: string;
  imagenes: string[];
}

export interface ServicioPublico {
  nombre: string;
  disponible: boolean;
}

export interface InfraestructuraEcologica {
  descripcion: string;
  coberturaVegetal: string;
  fauna: string;
  hidrologia: string;
  usoSuelo: string;
  conservacionManejo: string;
  imagenes: string[];
}

export interface ViaAccesoPredio {
  descripcion: string;
  observaciones: {
    viaAccesoPrincipal: string;
    viaSecundaria: string;
    tipoPavimento: string;
    estadoPavimento: string;
    andenes: string;
    estadoAndenes: string;
    alumbradoPublico: string;
    estadoAlumbradoPublico: string;
  };
  imagenes: string[];
}

export interface ActividadesSector {
  usoPrincipal: string;
  usoComplementario: string;
  usoCondicionado: string;
  usoProhibido: string;
}

export interface CaracteristicasGenerales {
  formaGeometricaYdimensionDelPredio: FormaGeometricaYDimensionDelPredio;
  descripcionCondicionesSector: string;
  observaciones: string;
  estratoSocioeconomico: {
    descripcion: string;
    estrato: string;
  };
  entorno: string;
  viasPrincipales: ViasAcceso;
  transportePublico: TransportePublico;
  serviciosPublicos: ServicioPublico[];
  infraestructuraEcologica: InfraestructuraEcologica;
  viaAccesoPredio: ViaAccesoPredio;
  perspectivasValoracion: string;
  actividadesSector: ActividadesSector;
}

export interface EspecificacionConstructiva {
  tipo: string;
  identificacion: string;
  sistemaEstructural: string;
  tipoMamposteria: string;
  espesorMuros: string;
  cubierta: string;
}

export interface Acabado {
  tipo: string;
  identificacion: string;
  descripcion: string;
  acabadosYmateriales: string;
}

export interface DistribucionInteriorApartamento {
  numeroInterior: string;
  tipo: string;
  descripcion: string[];
  cantidad: number[];
}

export interface EspecificacionesConstructivas {
  especificacionConstructiva: EspecificacionConstructiva[];
  observacion: string;
  acabados: Acabado[];
  informacionConstruccion: string;
  distribucionInteriorApartamento: DistribucionInteriorApartamento[];
}

export interface InspeccionFisica {
  esquemaNormativo: string;
  zonaBarrio: string;
  clasificacionSuelo: string;
  categoriaUso: string;
  subcategoriaUso: string;
  tratamiento: string;
  servidumbres: string;
  alturaMaxima: string;
  densidadHabitacionalMaxima: string;
  indiceOcupacion: string;
  espacioPublicoEquipamientos: string;
  areaMinimaLote: string;
  amenazaMovimientoMasa: string;
  especificacionesConstructivas: EspecificacionesConstructivas;
}

export interface EspecificacionesInmueble {
  caracteristicasEspecificas: string;
  estadoConservacion: string;
}

export interface ImagenInmueble {
  tipoInmueble: string;
  identificacion: string;
  descripcion: string;
  tipoDistribucion: string;
  ruta: string;
}

export interface Avaluo {
  userId: string;
  estado: EstadoAvaluo;
  fechaCreacion: string;
  informacionGeneral: InformacionGeneral;
  aspectosJuridicos: AspectosJuridicos;
  caracteristicasGenerales: CaracteristicasGenerales;
  inspeccionFisica: InspeccionFisica;
  especificacionesInmueble: EspecificacionesInmueble;
  imagenesInmueble: ImagenInmueble[];
}
