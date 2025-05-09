import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect()
      .then(client => {
        console.log('✅ Connected to MongoDB in development mode');
        return client;
      })
      .catch(err => {
        console.error('Failed to connect to MongoDB:', err);
        throw err;
      });
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect()
    .then(client => {
      console.log('✅ Connected to MongoDB in production mode');
      return client;
    })
    .catch(err => {
      console.error('Failed to connect to MongoDB:', err);
      throw err;
    });
}

// Función para conectar y obtener la base de datos
export async function getMongoDb() {
  try {
    const client = await clientPromise;
    const db = client.db();
    return db;
  } catch (error) {
    console.error('❌ Error getting database:', error);
    throw error;
  }
}

export default clientPromise;
