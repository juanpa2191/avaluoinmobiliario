const en = {
  app: {
    auth: {
      signIn: 'Sign In',
      signUp: 'Sign Up',
      createAccount: 'Create Account',
      signOut: 'Sign Out',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      name: 'Full Name',
      phone: 'Phone',
      remember: 'Remember me',
      forgotPassword: 'Forgot your password?',
      dontHaveAccount: "Don't have an account?",
      alreadyHaveAccount: 'Already have an account?',
      orSignInWith: 'or sign in with',
      orSignUpWith: 'or sign up with',
      google: 'Google',
      facebook: 'Facebook',
      instagram: 'Instagram',
      termsAccept: 'I accept the terms and conditions',
      errors: {
        title: 'Error',
        backToSignIn: 'Back to Sign In',
        default: 'An error has occurred',
        requiredFields: 'All fields are required',
        invalidEmail: 'Invalid email address',
        emailExists: 'Email is already registered',
        WeakPassword: 'Password must be at least 8 characters long',
        passwordMismatch: 'Passwords do not match',
        acceptTerms: 'You must accept the terms and conditions',
        autoSignIn: 'Error during automatic sign in',
        CredentialsSignin: 'Invalid credentials',
        unauthorized: 'Unauthorized'
      },
      success: {
        userCreated: 'User registered successfully'
      }
    },
    appraisal: {
      sections: {
        informacionGeneral: 'General Information',
        aspectosJuridicos: 'Legal Aspects',
        caracteristicasGenerales: 'General Characteristics',
        inspeccionFisica: 'Physical Inspection',
        especificacionesInmueble: 'Property Specifications'
      },
      actions: {
        saving: 'Saving...',
        saveDraft: 'Save Draft',
        finalize: 'Finalize Appraisal'
      },
      fields: {
        fechaEntrega: 'Delivery Date',
        solicitante: 'Requester',
        responsabilidades: 'Appraiser Responsibilities',
        propietarios: 'Owners',
        nombrePropietario: 'Owner Name',
        identificacionPropietario: 'Owner ID',
        tipoPropietario: 'Owner Type',
        direccion: 'Address',
        matriculaInmobiliaria: 'Property Registration',
        estratoSocioeconomico: 'Socioeconomic Stratum',
        serviciosPublicos: 'Public Services',
        areaTerreno: 'Land Area',
        areaConstruida: 'Built Area',
        distribucionEspacios: 'Space Distribution',
        caracteristicasEspecificas: 'Specific Characteristics',
        estadoConservacion: 'Conservation State',
        imagenes: 'Property Images'
      },
      status: {
        draft: 'Draft',
        inProgress: 'In Progress',
        completed: 'Completed',
        archived: 'Archived'
      },
      messages: {
        saved: 'Appraisal saved successfully',
        finalized: 'Appraisal finalized successfully',
        deleted: 'Appraisal deleted successfully',
        error: 'Error processing appraisal'
      },
      new: 'New Appraisal',
      list: {
        title: 'Appraisal Management'
      },
      new: {
        title: 'New Appraisal',
        success: 'Appraisal created successfully',
        error: 'Error creating appraisal'
      },
      details: 'Appraisal Details',
      address: 'Address',
      propertyType: 'Property Type',
      landArea: 'Land Area',
      builtArea: 'Built Area',
      age: 'Age',
      description: 'Description',
      statusLabel: 'Status',
      status: {
        pending: 'Pending',
        in_progress: 'In Progress',
        completed: 'Completed'
      },
      propertyTypes: {
        residential: 'Residential',
        commercial: 'Commercial',
        industrial: 'Industrial',
        land: 'Land'
      },
      informacionGeneral: {
        fechaEntrega: 'Delivery date',
        fechaVisita: 'Visit date',
        vigenciaAvaluo: 'Appraisal validity',
        vigenciaAvaluoPlaceholder: 'Ex: 1 year',
        solicitante: 'Requester',
        departamento: 'State',
        municipio: 'City',
        barrioVereda: 'Neighborhood/District',
        objetoAvaluo: 'Appraisal object',
        destinoAvaluo: 'Appraisal purpose',
        responsabilidadesAvaluador: 'Appraiser responsibilities',
        responsabilidadesList: {
          list: [
            'Property visit',
            'Document verification',
            'Market analysis',
            'Report preparation'
          ]
        }
      },
      aspectosJuridicos: {
        inmuebleObjetoAvaluo: {
          titulo: 'Property subject to appraisal',
          escrituraPublica: 'Public deed',
          modoAdquisicion: 'Acquisition mode',
          matriculaInmobiliaria: 'Property registration',
          fichaInmobiliaria: 'Property record',
          codigoCatastral: 'Cadastral code'
        },
        propietarios: {
          titulo: 'Owners',
          agregar: 'Add owner',
          nombrePropietario: 'Owner name',
          identificacionPropietario: 'Owner ID',
          tipoPropietario: 'Owner type',
          tipoIdentificacion: 'Type of identification',
          numeroIdentificacion: 'Identification number'
        },
        tipoInmueble: {
          titulo: 'Property type',
          tipo: 'Type',
          regimen: 'Regime',
          zona: 'Zone',
          tipos: [
            { value: 'CASA', label: 'House' },
            { value: 'APARTAMENTO', label: 'Apartment' },
            { value: 'LOCAL', label: 'Commercial space' },
            { value: 'BODEGA', label: 'Warehouse' },
            { value: 'TERRENO', label: 'Land' },
            { value: 'OTRO', label: 'Other' }
          ],
          regimenes: [
            { value: 'PH', label: 'Horizontal property' },
            { value: 'NPH', label: 'Non-horizontal property' }
          ],
          zonas: [
            { value: 'URBANA', label: 'Urban' },
            { value: 'RURAL', label: 'Rural' },
            { value: 'EXPANSION', label: 'Urban expansion' }
          ]
        },
        direccionYdestinacionEconomica: {
          titulo: 'Address and economic purpose',
          direccion: 'Address',
          destinacionEconomica: 'Economic purpose',
          imagen: 'Property image',
          descripcion: 'Description',
          destinaciones: [
            { value: 'RESIDENCIAL', label: 'Residential' },
            { value: 'COMERCIAL', label: 'Commercial' },
            { value: 'INDUSTRIAL', label: 'Industrial' },
            { value: 'INSTITUCIONAL', label: 'Institutional' },
            { value: 'MIXTO', label: 'Mixed use' }
          ]
        }
      },
      caracteristicasGenerales: {
        formaGeometricaYdimensionDelPredio: {
          titulo: 'Geometric shape and size of the property',
          formaTerreno: 'Terrain shape',
          dimensionTerreno: 'Terrain dimension',
          formaConstruida: 'Building shape',
          dimensionConstruida: 'Building dimension',
          anchoTerreno: 'Terrain width',
          largoTerreno: 'Terrain length',
          areaTerreno: 'Terrain area',
          anchoConstruido: 'Building width',
          largoConstruido: 'Building length',
          areaConstruida: 'Building area',
        },
        estratoSocioeconomico: {
          titulo: 'Socioeconomic stratum',
          estrato: 'Stratum',
          descripcion: 'Description'
        },
        serviciosPublicos:{
          titulo:'Public Services',
          serviciosPublicos:'Public Services',
          agregar:'Add Public Service',
          eliminar:'Remove Public Service',
          nombre:'Name',
          disponible:'Available'
        },
        infraestructuraEcologica:{
          titulo:'Ecological Infrastructure',
          infraestructuraEcologica:'Ecological Infrastructure',
          agregar:'Add Ecological Infrastructure',
          eliminar:'Remove Ecological Infrastructure',
          nombre:'Name',
          disponible:'Available',
          descripcion:'Description',
          fauna:'Fauna',
          flora:'Flora',
          paisajes:'Landscapes',
          hidrologia:'Hydrology',
          coberturaVegetal:'Vegetation cover',
          usoSuelo:'Land use',
          conservacionManejo:'Conservation and management',
          imagenes:'Images',
          
        },
        descripcionCondicionesSector:'description of sector conditions'
      },
      inspeccionFisica: {
        titulo: "Physical inspection",
        esquemaNormativo: {
          titulo: "Normative schema",
          esquema: "Normative schema",
          zonaBarrio: "Zone/Neighborhood",
          clasificacionSuelo: {
            titulo: "Soil classification",
            opciones: {
              seleccione: "Select...",
              urbano: "Urban",
              rural: "Rural",
              expansion: "Expansion"
            }
          },
          categoriaUso: "Use category"
        },
        especificacionesConstructivas: {
          titulo: "Constructive specifications",
          agregar: "Add specification",
          tipo: "Type",
          identificacion: "Identification",
          sistemaEstructural: "Structural system",
          tipoMamposteria: "Type of masonry",
          espesorMuros: "Wall thickness",
          cubierta: "Roof"
        },
        acabados: {
          titulo: "Finishes",
          agregar: "Add finish",
          tipo: "Type",
          descripcion: "Description",
          identificacion: "Identification",
          acabadosYmateriales: "Finishes and materials"
        },
        distribucionInterior: {
          titulo: "Interior distribution",
          agregar: "Add distribution",
          numeroInterior: "Interior number",
          tipo: "Type"
        }
      },
      especificacionesInmueble: {
        titulo: "Property specifications",
        caracteristicasEspecificas: {
          titulo: "Specific characteristics",
          descripcion: "Description of specific characteristics"
        },
        estadoConservacion: {
          titulo: "Conservation state",
          estado: "Conservation state",
          opciones: {
            seleccione: "Select...",
            excelente: "Excellent",
            bueno: "Good",
            regular: "Regular",
            malo: "Bad",
            muyMalo: "Very bad"
          }
        },
        imagenesInmueble: {
          titulo: "Property images",
          agregar: "Add image",
          tipoInmueble: {
            titulo: "Property type",
            opciones: {
              seleccione: "Select...",
              casa: "Home",
              apartamento: "Apartment",
              local: "Commercial space",
              bodega: "Warehouse",
              terreno: "Land",
              otro: "Other"
            }
          },
          identificacion: "Identification",
          descripcion: "Description",
          tipoDistribucion: {
            titulo: "Distribution type",
            opciones: {
              seleccione: "Select...",
              fachada: "Facade",
              interior: "Interior",
              exterior: "Exterior",
              plano: "Plan",
              otro: "Other"
            }
          },
          imagen: "Imagen"
        }
      }
    },
    users: {
      title: 'Users',
      new: 'New User',
      edit: 'Edit User',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      role: 'Role',
      list: 'List',
      roles: {
        admin: 'Administrator',
        user: 'User'
      },
      search: 'Search users...',
      deleted: 'User deleted successfully',
      created: 'User created successfully',
      updated: 'User updated successfully',
      deleteConfirmTitle: 'Delete user?',
      deleteConfirmMessage: 'Are you sure you want to delete user {name}? This action cannot be undone.'
    },
    profile: {
      title: 'My Profile',
      changePassword: 'Change Password',
      currentPassword: 'Current Password',
      newPassword: 'New Password',
      confirmNewPassword: 'Confirm New Password',
      errors: {
        updateFailed: 'Failed to update profile',
        requiredFields: 'Name and phone are required',
        userNotFound: 'User not found',
        currentPasswordRequired: 'Current password is required',
        invalidCurrentPassword: 'Current password is incorrect'
      },
      success: {
        updated: 'Profile updated successfully'
      }
    },
    general: {
      appName: 'Real Estate Appraisals',
      loading: 'Loading...',
      select: 'Select...',
      save: 'Save',
      cancel: 'Cancel',
      edit: 'Edit',
      delete: 'Delete',
      view: 'View',
      search: 'Search',
      filter: 'Filter',
      noResults: 'No results found',
      error: 'Error',
      success: 'Success',
      warning: 'Warning',
      info: 'Information',
      date: 'Date',
      actions: 'Actions',
      viewDetails: 'View details'
    },
    sidebar: {
      dashboard: 'Dashboard',
      dashboardDesc: 'Overview and statistics',
      appraisals: 'Appraisals',
      appraisalsDesc: 'Manage real estate appraisals',
      settings: 'Settings',
      profile: 'Profile',
      help: 'Help',
      users: 'Users',
      usersDesc: 'Manage system users'
    },
    landing: {
      description: 'Professional system for real estate appraisal management',
      features: {
        title: 'Main Features',
        professionalAppraisals: {
          title: 'Professional Appraisals',
          description: 'Perform precise and detailed appraisals with professional standards'
        },
        detailedReports: {
          title: 'Detailed Reports',
          description: 'Generate comprehensive and customized reports for each property'
        },
        efficientManagement: {
          title: 'Efficient Management',
          description: 'Manage all your appraisal projects efficiently'
        }
      }
    },
    dashboard: {
      title: 'Dashboard',
      welcome: 'Welcome',
      summary: {
        total: 'Total Appraisals',
        pending: 'Pending Appraisals',
        completed: 'Completed Appraisals'
      },
      recentAppraisals: 'Recent Appraisals',
      viewAll: 'View All',
      noAppraisals: 'No recent appraisals',
      newAppraisal: 'New Appraisal',
      totalAppraisals: 'Total Appraisals',
      pendingAppraisals: 'Pending Appraisals',
      completedAppraisals: 'Completed Appraisals',
      totalUsers: 'Total Users',
      noAppraisalsYet:'You do not have appraisals yet',
      stats: {
        title: 'Statistics',
        totalAppraisals: 'Total Appraisals',
        pendingAppraisals: 'Pending Appraisals',
        completedAppraisals: 'Completed Appraisals',
        totalUsers: 'Total Users',
        view: 'View'
      }
    },
    avaluo: {
      title: 'Appraisal',
      new: 'New Appraisal',
      edit: 'Edit Appraisal',
      list: 'Appraisals List'
    },
    errors: {
      fetchUsers: 'Error loading users',
      fetchUser: 'Error loading user',
      saveUser: 'Error saving user',
      deleteUser: 'Error deleting user',
      title: 'Error',
      backToSignIn: 'Back to Sign In',
      default: 'An error has occurred',
      requiredFields: 'All fields are required',
      invalidEmail: 'Invalid email address',
      emailExists: 'Email is already registered',
      WeakPassword: 'Password must be at least 8 characters long',
      passwordMismatch: 'Passwords do not match',
      acceptTerms: 'You must accept the terms and conditions',
      autoSignIn: 'Error during automatic sign in',
      CredentialsSignin: 'Invalid credentials',
      unauthorized: 'Unauthorized'
  },
  language: 'Language'
}
};

export default en;
