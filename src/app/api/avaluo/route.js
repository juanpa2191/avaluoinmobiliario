import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import mongoose from 'mongoose';
import { dbConnect } from '@/lib/mongoose';

// Definir el esquema de Avaluo
const propietarioSchema = new mongoose.Schema({
  nombre: String,
  identificacion: String,
  tipo: String
});

const informacionGeneralSchema = new mongoose.Schema({
  fechaEntrega: Date,
  solicitante: String,
  responsabilidades: String
});

const aspectosJuridicosSchema = new mongoose.Schema({
  propietarios: [propietarioSchema]
});

const caracteristicasGeneralesSchema = new mongoose.Schema({
  serviciosPublicos: [{ type: String }],
  estratoSocioeconomico: {
    tablaEstratificacionNacional: [{ type: String }]
  }
});

const inspeccionFisicaSchema = new mongoose.Schema({
  // Agregar campos para inspeccionFisica
});

const especificacionesInmuebleSchema = new mongoose.Schema({
  // Agregar campos para especificacionesInmueble
});

const imagenesInmuebleSchema = new mongoose.Schema({
  // Agregar campos para imagenesInmueble
});

const avaluoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  estado: { type: String, default: 'borrador' },
  fechaCreacion: { type: Date, default: Date.now },
  informacionGeneral: informacionGeneralSchema,
  aspectosJuridicos: aspectosJuridicosSchema,
  caracteristicasGenerales: caracteristicasGeneralesSchema,
  inspeccionFisica: inspeccionFisicaSchema,
  especificacionesInmueble: especificacionesInmuebleSchema,
  imagenesInmueble: imagenesInmuebleSchema
});

// Crear el modelo si no existe
const Avaluo = mongoose.models.Avaluo || mongoose.model('Avaluo', avaluoSchema);

export async function POST(request) {
  try {
    // Verificar sesión
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    // Conectar a MongoDB
    await dbConnect();
    console.log('MongoDB conectado correctamente');

    // Obtener datos del request
    const data = await request.json();
    
    // Crear nuevo avalúo
    const nuevoAvaluo = new Avaluo({
      userId: session.user.id,
      estado: 'borrador',
      fechaCreacion: new Date(),
      informacionGeneral: data.informacionGeneral,
      aspectosJuridicos: {
        propietarios: data.aspectosJuridicos.propietarios
      },
      caracteristicasGenerales: {
        serviciosPublicos: data.caracteristicasGenerales.serviciosPublicos,
        estratoSocioeconomico: {
          tablaEstratificacionNacional: data.caracteristicasGenerales.estratoSocioeconomico.tablaEstratificacionNacional
        }
      },
      inspeccionFisica: data.inspeccionFisica,
      especificacionesInmueble: data.especificacionesInmueble,
      imagenesInmueble: data.imagenesInmueble
    });

    // Guardar en la base de datos
    const avaluoGuardado = await nuevoAvaluo.save();
    console.log('Avalúo guardado:', avaluoGuardado);

    return NextResponse.json(avaluoGuardado);

  } catch (error) {
    console.error('Error en la API de avalúo:', error);
    return NextResponse.json(
      { error: 'Error al procesar el avalúo' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    // Verificar sesión
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    // Conectar a MongoDB
    await dbConnect();
    console.log('MongoDB conectado correctamente');

    // Obtener parámetros de búsqueda
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Buscar avalúos
    const [avaluos, total] = await Promise.all([
      Avaluo.find({ userId: session.user.id })
        .skip(skip)
        .limit(limit)
        .sort({ fechaCreacion: -1 }),
      Avaluo.countDocuments({ userId: session.user.id })
    ]);

    return NextResponse.json({
      avaluos,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        page,
        limit
      }
    });

  } catch (error) {
    console.error('Error en la API de avalúo:', error);
    return NextResponse.json(
      { error: 'Error al obtener los avalúos' },
      { status: 500 }
    );
  }
}
