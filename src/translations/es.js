const es = {
  app: {
    auth: {
      signIn: 'Iniciar sesión',
      signUp: 'Registrarse',
      createAccount: 'Crear cuenta',
      signOut: 'Cerrar sesión',
      email: 'Correo electrónico',
      password: 'Contraseña',
      confirmPassword: 'Confirmar contraseña',
      name: 'Nombre completo',
      phone: 'Teléfono',
      remember: 'Recordarme',
      forgotPassword: '¿Olvidaste tu contraseña?',
      dontHaveAccount: "¿No tienes una cuenta?",
      alreadyHaveAccount: '¿Ya tienes una cuenta?',
      orSignInWith: 'o iniciar sesión con',
      orSignUpWith: 'o registrarse con',
      google: 'Google',
      facebook: 'Facebook',
      instagram: 'Instagram',
      termsAccept: 'Acepto los términos y condiciones',
      errors: {
        title: 'Error',
        backToSignIn: 'Volver a iniciar sesión',
        default: 'Ha ocurrido un error',
        requiredFields: 'Todos los campos son obligatorios',
        invalidEmail: 'Correo electrónico inválido',
        emailExists: 'El correo electrónico ya está registrado',
        WeakPassword: 'La contraseña debe tener al menos 8 caracteres',
        passwordMismatch: 'Las contraseñas no coinciden',
        acceptTerms: 'Debes aceptar los términos y condiciones',
        autoSignIn: 'Error durante el inicio de sesión automático',
        CredentialsSignin: 'Credenciales inválidas',
        unauthorized: 'No autorizado'
      },
      success: {
        userCreated: 'Usuario registrado exitosamente'
      }
    },
    appraisal: {
      sections: {
        informacionGeneral: 'Información General',
        aspectosJuridicos: 'Aspectos Jurídicos',
        caracteristicasGenerales: 'Características Generales',
        inspeccionFisica: 'Inspección Física',
        especificacionesInmueble: 'Especificaciones Inmuebles'
      },
      actions: {
        saving: 'Guardando...',
        saveDraft: 'Guardar Borrador',
        finalize: 'Finalizar Avaluo'
      },
      fields: {
        fechaEntrega: 'Fecha de Entrega',
        solicitante: 'Solicitante',
        responsabilidades: 'Responsabilidades',
        propietarios: 'Propietarios',
        nombrePropietario: 'Nombre del Propietario',
        identificacionPropietario: 'Identificación del Propietario',
        tipoPropietario: 'Tipo de Propietario',
        direccion: 'Dirección',
        matriculaInmobiliaria: 'Matrícula Inmobiliaria',
        estratoSocioeconomico: 'Estrato Socioeconómico',
        serviciosPublicos: 'Servicios Públicos',
        areaTerreno: 'Área Terreno',
        areaConstruida: 'Área Construida',
        distribucionEspacios: 'Distribución de Espacios',
        caracteristicasEspecificas: 'Características Específicas',
        estadoConservacion: 'Estado de Conservación',
        imagenes: 'Imágenes del Inmueble'
      },
      status: {
        draft: 'Borrador',
        inProgress: 'En Progreso',
        completed: 'Completado',
        archived: 'Archivado'
      },
      messages: {
        saved: 'Avaluo guardado exitosamente',
        finalized: 'Avaluo finalizado exitosamente',
        deleted: 'Avaluo eliminado exitosamente',
        error: 'Error procesando avaluo'
      },
      new: 'Nuevo Avaluo',
      list: {
        title: 'Gestión de Avaluos'
      },
      new: {
        title: 'Nuevo Avaluo',
        success: 'Avaluo creado exitosamente',
        error: 'Error creando avaluo'
      },
      details: 'Detalles del Avaluo',
      address: 'Dirección',
      propertyType: 'Tipo de Inmueble',
      landArea: 'Área Terreno',
      builtArea: 'Área Construida',
      age: 'Edad',
      description: 'Descripción',
      statusLabel: 'Estado',
      status: {
        pending: 'Pendiente',
        in_progress: 'En Progreso',
        completed: 'Completado'
      },
      propertyTypes: {
        residential: 'Residencial',
        commercial: 'Comercial',
        industrial: 'Industrial',
        land: 'Terreno'
      },
      informacionGeneral: {
        fechaEntrega: 'Fecha de Entrega',
        fechaVisita: 'Fecha de Visita',
        vigenciaAvaluo: 'Vigencia del Avaluo',
        vigenciaAvaluoPlaceholder: 'Ex: 1 año',
        solicitante: 'Solicitante',
        departamento: 'Departamento',
        municipio: 'Municipio',
        barrioVereda: 'Barrio/Vereda',
        objetoAvaluo: 'Objeto del Avaluo',
        destinoAvaluo: 'Destino del Avaluo',
        responsabilidadesAvaluador: 'Responsabilidades del Avaluo',
        responsabilidadesList: {
          list: [
            'Visita al Inmueble',
            'Verificación de Documentos',
            'Análisis del Mercado',
            'Preparación del Reporte'
          ]
        }
      },
      aspectosJuridicos: {
        inmuebleObjetoAvaluo: {
          titulo: 'Inmueble objeto del avaluo',
          escrituraPublica: 'Escritura Pública',
          modoAdquisicion: 'Modo de Adquisición',
          matriculaInmobiliaria: 'Matrícula Inmobiliaria',
          fichaInmobiliaria: 'Ficha Inmobiliaria',
          codigoCatastral: 'Código Catastral'
        },
        propietarios: {
          titulo: 'Propietarios',
          agregar: 'Agregar Propietario',
          nombrePropietario: 'Nombre del Propietario',
          identificacionPropietario: 'Identificación del Propietario',
          tipoPropietario: 'Tipo de Propietario',
          tipoIdentificacion: 'Tipo de Identificación',
          numeroIdentificacion: 'Número de Identificación'
        },
        tipoInmueble: {
          titulo: 'Tipo de Inmueble',
          tipo: 'Tipo',
          regimen: 'Regimen',
          zona: 'Zona',
          tipos: [
            { value: 'CASA', label: 'Casa' },
            { value: 'APARTAMENTO', label: 'Apartamento' },
            { value: 'LOCAL', label: 'Local comercial' },
            { value: 'BODEGA', label: 'Bodega' },
            { value: 'TERRENO', label: 'Terreno' },
            { value: 'OTRO', label: 'Otros' }
          ],
          regimenes: [
            { value: 'PH', label: 'Horizontal' },
            { value: 'NPH', label: 'No horizontal' }
          ],
          zonas: [
            { value: 'URBANA', label: 'Urbana' },
            { value: 'RURAL', label: 'Rural' },
            { value: 'EXPANSION', label: 'Expansion urbana' }
          ]
        },
        direccionYdestinacionEconomica: {
          titulo: 'Dirección y propósito económico',
          direccion: 'Dirección',
          destinacionEconomica: 'Propósito económico',
          imagen: 'Imagen del Inmueble',
          descripcion: 'Descripción',
          destinaciones: [
            { value: 'RESIDENCIAL', label: 'Residencial' },
            { value: 'COMERCIAL', label: 'Comercial' },
            { value: 'INDUSTRIAL', label: 'Industrial' },
            { value: 'INSTITUCIONAL', label: 'Institucional' },
            { value: 'MIXTO', label: 'Mixto' }
          ]
        }
      },
      caracteristicasGenerales: {
        formaGeometricaYdimensionDelPredio: {
          titulo: 'Forma geométrica y dimension del predio',
          formaTerreno: 'Forma del terreno',
          dimensionTerreno: 'Dimension del terreno',
          formaConstruida: 'Forma de la construcción',
          dimensionConstruida: 'Dimension de la construcción',
          anchoTerreno: 'Ancho del terreno',
          largoTerreno: 'Largo del terreno',
          areaTerreno: 'Área del terreno',
          anchoConstruido: 'Ancho de la construcción',
          largoConstruido: 'Largo de la construcción',
          areaConstruida: 'Área de la construcción',
        },
        estratoSocioeconomico: {
          titulo: 'Estrato socioeconómico',
          estrato: 'Estrato',
          descripcion: 'Descripción'
        },
        serviciosPublicos:{
          titulo:'Servicios Publicos',
          serviciosPublicos:'Servicios Publicos',
          agregar:'Agregar Servicio Publico',
          eliminar:'Eliminar Servicio Publico',
          nombre:'Nombre',
          disponible:'Disponible'
        },
        infraestructuraEcologica:{
          titulo:'Infraestructura Ecológica',
          infraestructuraEcologica:'Infraestructura Ecológica',
          agregar:'Agregar Infraestructura Ecológica',
          eliminar:'Eliminar Infraestructura Ecológica',
          nombre:'Nombre',
          disponible:'Disponible',
          descripcion:'Descripción',
          fauna:'Fauna',
          flora:'Flora',
          paisajes:'Paisajes',
          hidrologia:'Hidrología',
          coberturaVegetal:'Cobertura Vegetal',
          usoSuelo:'Uso del Suelo',
          conservacionManejo:'Conservación y Manejo',
          imagenes:'Imagenes',
          
        },
        descripcionCondicionesSector:'descripcion Condiciones Sector'
      },
      inspeccionFisica: {
      titulo: "Inspección física",
      esquemaNormativo: {
        titulo: "Esquema normativo",
        esquema: "Esquema normativo",
        zonaBarrio: "Zona/Barrio",
        clasificacionSuelo: {
          titulo: "Clasificación del suelo",
          opciones: {
            seleccione: "Seleccione...",
            urbano: "Urbano",
            rural: "Rural",
            expansion: "Expansión"
          }
        },
        categoriaUso: "Categoría de uso"
      },
      especificacionesConstructivas: {
        titulo: "Especificaciones constructivas",
        agregar: "Agregar especificación",
        tipo: "Tipo",
        identificacion: "Identificación",
        sistemaEstructural: "Sistema estructural",
        tipoMamposteria: "Tipo de mampostería",
        espesorMuros: "Espesor de muros",
        cubierta: "Cubierta"
      },
      acabados: {
        titulo: "Acabados",
        agregar: "Agregar acabado",
        tipo: "Tipo",
        descripcion: "Descripción",
        identificacion: "Identificación",
        acabadosYmateriales: "Acabados y materiales"
      },
      distribucionInterior: {
        titulo: "Distribución interior",
        agregar: "Agregar distribución",
        numeroInterior: "Número interior",
        tipo: "Tipo"
      }
    },
    especificacionesInmueble: {
      titulo: "Especificaciones del inmueble",
      caracteristicasEspecificas: {
        titulo: "Características específicas",
        descripcion: "Descripción de características específicas"
      },
      estadoConservacion: {
        titulo: "Estado de conservación",
        estado: "Estado de conservación",
        opciones: {
          seleccione: "Seleccione...",
          excelente: "Excelente",
          bueno: "Bueno",
          regular: "Regular",
          malo: "Malo",
          muyMalo: "Muy malo"
        }
      },
      imagenesInmueble: {
        titulo: "Imágenes del inmueble",
        agregar: "Agregar imagen",
        tipoInmueble: {
          titulo: "Tipo de inmueble",
          opciones: {
            seleccione: "Seleccione...",
            casa: "Casa",
            apartamento: "Apartamento",
            local: "Local comercial",
            bodega: "Bodega",
            terreno: "Terreno",
            otro: "Otro"
          }
        },
        identificacion: "Identificación",
        descripcion: "Descripción",
        tipoDistribucion: {
          titulo: "Tipo de distribución",
          opciones: {
            seleccione: "Seleccione...",
            fachada: "Fachada",
            interior: "Interior",
            exterior: "Exterior",
            plano: "Plano",
            otro: "Otro"
          }
        },
        imagen: "Imagen"
      }
    }
    },
    users: {
      title: 'Usuarios',
      new: 'Nuevo Usuario',
      edit: 'Editar Usuario',
      name: 'Nombre',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      role: 'Rol',
      list: 'Listar',
      roles: {
        admin: 'Administrador',
        user: 'Usuario'
      },
      search: 'Buscar usuarios...',
      deleted: 'Usuario eliminado exitosamente',
      created: 'Usuario creado exitosamente',
      updated: 'Usuario actualizado exitosamente',
      deleteConfirmTitle: 'Eliminar usuario?',
      deleteConfirmMessage: '¿Estás seguro de eliminar el usuario {name}? Esta acción no se puede deshacer.'
    },
    profile: {
      title: 'Mi Perfil',
      changePassword: 'Cambiar Contraseña',
      currentPassword: 'Contraseña Actual',
      newPassword: 'Nueva Contraseña',
      confirmNewPassword: 'Confirmar Nueva Contraseña',
      errors: {
        updateFailed: 'Error al actualizar perfil',
        requiredFields: 'Nombre y teléfono son obligatorios',
        userNotFound: 'Usuario no encontrado',
        currentPasswordRequired: 'Contraseña actual es requerida',
        invalidCurrentPassword: 'Contraseña actual es incorrecta'
      },
      success: {
        updated: 'Perfil actualizado exitosamente'
      }
    },
    general: {
      appName: 'Avaluos Inmobiliarios',
      loading: 'Cargando...',
      select: 'Seleccionar...',
      save: 'Guardar',
      cancel: 'Cancelar',
      edit: 'Editar',
      delete: 'Eliminar',
      view: 'Ver',
      search: 'Buscar',
      filter: 'Filtrar',
      noResults: 'No se encontraron resultados',
      error: 'Error',
      success: 'Exito',
      warning: 'Advertencia',
      info: 'Información',
      date: 'Fecha',
      actions: 'Acciones',
      viewDetails: 'Ver detalles'
    },
    sidebar: {
      dashboard: 'Dashboard',
      dashboardDesc: 'Resumen y estadísticas',
      appraisals: 'Avaluos',
      appraisalsDesc: 'Gestionar avaluos',
      settings: 'Configuración',
      profile: 'Perfil',
      help: 'Ayuda',
      users: 'Usuarios',
      usersDesc: 'Gestionar usuarios del sistema'
    },
    landing: {
      description: 'Sistema profesional para gestión de avaluos inmobiliarios',
      features: {
        title: 'Características principales',
        professionalAppraisals: {
          title: 'Avaluos Profesionales',
          description: 'Realizar avaluos precisos y detallados con estándares profesionales'
        },
        detailedReports: {
          title: 'Reportes Detallados',
          description: 'Generar reportes completos y personalizados para cada propiedad'
        },
        efficientManagement: {
          title: 'Gestion Eficiente',
          description: 'Gestionar todos tus proyectos de avaluo de manera eficiente'
        }
      }
    },
    dashboard: {
      title: 'Dashboard',
      welcome: 'Bienvenido',
      summary: {
        total: 'Total Avaluos',
        pending: 'Avaluos Pendientes',
        completed: 'Avaluos Completados'
      },
      recentAppraisals: 'Avaluos Recientes',
      viewAll: 'Ver Todo',
      noAppraisals: 'No hay avaluos recientes',
      newAppraisal: 'Nuevo Avaluo',
      totalAppraisals: 'Total Avaluos',
      pendingAppraisals: 'Avaluos Pendientes',
      completedAppraisals: 'Avaluos Completados',
      totalUsers: 'Total Usuarios',
      noAppraisalsYet:'No tienes avaluos',
      stats: {
        title: 'Estadísticas',
        totalAppraisals: 'Total Avaluos',
        pendingAppraisals: 'Avaluos Pendientes',
        completedAppraisals: 'Avaluos Completados',
        totalUsers: 'Total Usuarios',
        view: 'Ver'
      }
    },
    avaluo: {
      title: 'Avaluo',
      new: 'Nuevo Avaluo',
      edit: 'Editar Avaluo',
      list: 'Lista de Avaluos',
      
    },
    errors: {
      fetchUsers: 'Error cargando usuarios',
      fetchUser: 'Error cargando usuario',
      saveUser: 'Error guardando usuario',
      deleteUser: 'Error eliminando usuario',
      title: 'Error',
      backToSignIn: 'Regresar a Iniciar Sesión',
      default: 'Un error ha ocurrido',
      requiredFields: 'Todos los campos son obligatorios',
      invalidEmail: 'Correo electrónico inválido',
      emailExists: 'El correo electrónico ya está registrado',
      WeakPassword: 'La contraseña debe tener al menos 8 caracteres',
      passwordMismatch: 'Las contraseñas no coinciden',
      acceptTerms: 'Debes aceptar los términos y condiciones',
      autoSignIn: 'Error durante el inicio de sesión automático',
      CredentialsSignin: 'Credenciales inválidas',
      unauthorized: 'No autorizado'
  }
},
language: 'Language'
};
export default es;
