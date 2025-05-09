import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  if (cached.conn) {
    console.log('Usando conexión existente a MongoDB');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('Nueva conexión a MongoDB establecida');
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log('Conexión a MongoDB exitosa');
  } catch (e) {
    cached.promise = null;
    console.error('Error conectando a MongoDB:', e);
    throw e;
  }

  return cached.conn;
}
