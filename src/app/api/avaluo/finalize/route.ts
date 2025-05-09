import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import mongoose from 'mongoose';
import { dbConnect } from '@/lib/mongoose';
import { avaluoSchema } from '@/schemas/avaluo.schema';

// Definir el esquema de Avaluo para Mongoose
const avaluoMongooseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  estado: { type: String, required: true },
  fechaCreacion: { type: Date, default: Date.now },
  informacionGeneral: {
    fechaEntrega: String,
    fechaVisita: String,
    vigenciaAvaluo: String,
    solicitante: String,
    departamento: String,
    municipio: String,
    barrioVereda: String,
    objetoAvaluo: String,
    destinoAvaluo: String,
    responsabilidadesAvaluador: [String]
  },
  aspectosJuridicos: {
    propietarios: [{
      propietario: String,
      tipoIdentificacion: String,
      numeroIdentificacion: String
    }]
  },
  caracteristicasGenerales: {
    serviciosPublicos: [{
      nombre: String,
      disponible: Boolean
    }],
    estratoSocioeconomico: {
      descripcion: String,
      tablaEstratificacionNacional: [String]
    }
  }
});

// Crear el modelo si no existe
const Avaluo = mongoose.models.Avaluo || mongoose.model('Avaluo', avaluoMongooseSchema);

export async function POST(request: Request) {
  try {
    // Verificar sesión
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    // Conectar a MongoDB
    await dbConnect();
    console.log('MongoDB conectado correctamente');

    // Obtener y validar datos
    const data = await request.json();
    const validatedData = avaluoSchema.parse({
      ...data,
      estado: 'finalizado',
      userId: session.user.id
    });

    // Crear nuevo avalúo finalizado
    const avaluo = new Avaluo(validatedData);
    const avaluoGuardado = await avaluo.save();
    console.log('Avalúo finalizado:', avaluoGuardado);

    return NextResponse.json(avaluoGuardado);

  } catch (error) {
    console.error('Error al finalizar el avalúo:', error);
    return NextResponse.json(
      { error: 'Error al finalizar el avalúo' },
      { status: 500 }
    );
  }
}
