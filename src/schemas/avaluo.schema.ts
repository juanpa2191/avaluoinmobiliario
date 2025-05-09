import { z } from 'zod';

// Esquemas básicos
const propietarioSchema = z.object({
  propietario: z.string().min(1, 'El nombre del propietario es requerido'),
  tipoIdentificacion: z.string().min(1, 'El tipo de identificación es requerido'),
  numeroIdentificacion: z.string().min(1, 'El número de identificación es requerido')
});

const inmuebleObjetoAvaluoSchema = z.object({
  escrituraPublica: z.string(),
  modoAdquisicion: z.string(),
  matriculaInmobiliaria: z.string(),
  fichaInmobiliaria: z.string(),
  codigoCatastral: z.string()
});

const tipoInmuebleSchema = z.object({
  tipo: z.string().min(1, 'El tipo de inmueble es requerido'),
  regimen: z.string(),
  zona: z.string()
});

const direccionDestinacionEconomicaSchema = z.object({
  direccion: z.string().min(1, 'La dirección es requerida'),
  destinacionEconomica: z.string(),
  imagen: z.string(),
  descripcion: z.string()
});

const certificadoTradicionLibertadSchema = z.object({
  pin: z.string(),
  fechaImpreso: z.string(),
  horaImpresion: z.string(),
  matriculaInmobiliaria: z.string(),
  propietario: z.string()
});

const escrituraPublicaSchema = z.object({
  numero: z.string(),
  fecha: z.string(),
  matriculaInmobiliaria: z.string(),
  propietario: z.string()
});

const impuestoPredialSchema = z.object({
  periodoFacturado: z.string(),
  fecha: z.string(),
  matriculaFicha: z.string(),
  codigoCatastral: z.string(),
  direccion: z.string(),
  propietario: z.string()
});

const fachadasSchema = z.object({
  frontal: z.string(),
  posterior: z.string(),
  lateralIzquierda: z.string(),
  lateralDerecha: z.string()
});

// Esquemas de secciones principales
const aspectosJuridicosSchema = z.object({
  inmuebleObjetoAvaluo: inmuebleObjetoAvaluoSchema,
  propietarios: z.array(propietarioSchema).min(1, 'Debe haber al menos un propietario'),
  tipoInmueble: tipoInmuebleSchema,
  direccionYdestinacionEconomica: direccionDestinacionEconomicaSchema,
  certificadoTradicionLibertad: certificadoTradicionLibertadSchema,
  escrituraPublica: escrituraPublicaSchema,
  impuestoPredial: impuestoPredialSchema,
  fachadas: fachadasSchema
});

const informacionGeneralSchema = z.object({
  fechaEntrega: z.string().min(1, 'La fecha de entrega es requerida'),
  fechaVisita: z.string().min(1, 'La fecha de visita es requerida'),
  vigenciaAvaluo: z.string(),
  solicitante: z.string().min(1, 'El solicitante es requerido'),
  departamento: z.string().min(1, 'El departamento es requerido'),
  municipio: z.string().min(1, 'El municipio es requerido'),
  barrioVereda: z.string(),
  objetoAvaluo: z.string().min(1, 'El objeto del avalúo es requerido'),
  destinoAvaluo: z.string(),
  responsabilidadesAvaluador: z.array(z.string())
});

const formaGeometricaSchema = z.object({
  formaTerreno: z.string(),
  anchoTerreno: z.number().min(0, 'El ancho debe ser mayor a 0'),
  largoTerreno: z.number().min(0, 'El largo debe ser mayor a 0'),
  areaTerreno: z.number().min(0, 'El área debe ser mayor a 0')
});

const viasAccesoSchema = z.object({
  descripcion: z.string(),
  acceso: z.record(z.boolean()),
  imagen: z.array(z.string()),
  vias: z.array(z.string())
});

const transportePublicoSchema = z.object({
  descripcion: z.string(),
  tiposTransporte: z.record(z.boolean()),
  frecuenciaOperacion: z.string(),
  imagenes: z.array(z.string())
});

const servicioPublicoSchema = z.object({
  nombre: z.string(),
  disponible: z.boolean()
});

const infraestructuraEcologicaSchema = z.object({
  descripcion: z.string(),
  coberturaVegetal: z.string(),
  fauna: z.string(),
  hidrologia: z.string(),
  usoSuelo: z.string(),
  conservacionManejo: z.string(),
  imagenes: z.array(z.string())
});

const viaAccesoPredioSchema = z.object({
  descripcion: z.string(),
  observaciones: z.object({
    viaAccesoPrincipal: z.string(),
    viaSecundaria: z.string(),
    tipoPavimento: z.string(),
    estadoPavimento: z.string(),
    andenes: z.string(),
    estadoAndenes: z.string(),
    alumbradoPublico: z.string(),
    estadoAlumbradoPublico: z.string()
  }),
  imagenes: z.array(z.string())
});

const actividadesSectorSchema = z.object({
  usoPrincipal: z.string(),
  usoComplementario: z.string(),
  usoCondicionado: z.string(),
  usoProhibido: z.string()
});

const caracteristicasGeneralesSchema = z.object({
  formaGeometricaYdimensionDelPredio: formaGeometricaSchema,
  descripcionCondicionesSector: z.string(),
  observaciones: z.string(),
  estratoSocioeconomico: z.object({
    descripcion: z.string(),
    tablaEstratificacionNacional: z.array(z.string())
  }),
  entorno: z.string(),
  viasPrincipales: viasAccesoSchema,
  transportePublico: transportePublicoSchema,
  serviciosPublicos: z.array(servicioPublicoSchema),
  infraestructuraEcologica: infraestructuraEcologicaSchema,
  viaAccesoPredio: viaAccesoPredioSchema,
  perspectivasValoracion: z.string(),
  actividadesSector: actividadesSectorSchema
});

const especificacionConstructivaSchema = z.object({
  tipo: z.string(),
  identificacion: z.string(),
  sistemaEstructural: z.string(),
  tipoMamposteria: z.string(),
  espesorMuros: z.string(),
  cubierta: z.string()
});

const acabadoSchema = z.object({
  tipo: z.string(),
  identificacion: z.string(),
  descripcion: z.string(),
  acabadosYmateriales: z.string()
});

const distribucionInteriorApartamentoSchema = z.object({
  numeroInterior: z.string(),
  tipo: z.string(),
  descripcion: z.array(z.string()),
  cantidad: z.array(z.number())
});

const especificacionesConstructivasSchema = z.object({
  especificacionConstructiva: z.array(especificacionConstructivaSchema),
  observacion: z.string(),
  acabados: z.array(acabadoSchema),
  informacionConstruccion: z.string(),
  distribucionInteriorApartamento: z.array(distribucionInteriorApartamentoSchema)
});

const inspeccionFisicaSchema = z.object({
  esquemaNormativo: z.string(),
  zonaBarrio: z.string(),
  clasificacionSuelo: z.string(),
  categoriaUso: z.string(),
  subcategoriaUso: z.string(),
  tratamiento: z.string(),
  servidumbres: z.string(),
  alturaMaxima: z.string(),
  densidadHabitacionalMaxima: z.string(),
  indiceOcupacion: z.string(),
  espacioPublicoEquipamientos: z.string(),
  areaMinimaLote: z.string(),
  amenazaMovimientoMasa: z.string(),
  especificacionesConstructivas: especificacionesConstructivasSchema
});

const especificacionesInmuebleSchema = z.object({
  caracteristicasEspecificas: z.string(),
  estadoConservacion: z.string()
});

const imagenInmuebleSchema = z.object({
  tipoInmueble: z.string(),
  identificacion: z.string(),
  descripcion: z.string(),
  tipoDistribucion: z.string(),
  ruta: z.string()
});

// Esquema principal del avalúo
export const avaluoSchema = z.object({
  userId: z.string().min(1, 'El ID del usuario es requerido'),
  estado: z.enum(['borrador', 'finalizado']),
  fechaCreacion: z.string(),
  informacionGeneral: informacionGeneralSchema,
  aspectosJuridicos: aspectosJuridicosSchema,
  caracteristicasGenerales: caracteristicasGeneralesSchema,
  inspeccionFisica: inspeccionFisicaSchema,
  especificacionesInmueble: especificacionesInmuebleSchema,
  imagenesInmueble: z.array(imagenInmuebleSchema)
});

// Esquema para validación parcial (borrador)
export const avaluoBorradorSchema = avaluoSchema.extend({
  // Hacemos que las imágenes sean opcionales en todos los niveles
  imagenesInmueble: z.array(imagenInmuebleSchema).optional(),
  caracteristicasGenerales: caracteristicasGeneralesSchema.extend({
    viasPrincipales: viasAccesoSchema.extend({
      imagen: z.array(z.string()).optional()
    }),
    transportePublico: transportePublicoSchema.extend({
      imagenes: z.array(z.string()).optional()
    }),
    infraestructuraEcologica: infraestructuraEcologicaSchema.extend({
      imagenes: z.array(z.string()).optional()
    }),
    viaAccesoPredio: viaAccesoPredioSchema.extend({
      imagenes: z.array(z.string()).optional()
    })
  }),
  aspectosJuridicos: aspectosJuridicosSchema.extend({
    direccionYdestinacionEconomica: direccionDestinacionEconomicaSchema.extend({
      imagen: z.string().optional()
    }),
    fachadas: fachadasSchema.extend({
      frontal: z.string().optional(),
      posterior: z.string().optional(),
      lateralIzquierda: z.string().optional(),
      lateralDerecha: z.string().optional()
    })
  })
}).partial();

export type Avaluo = z.infer<typeof avaluoSchema>;
