// src/api/example.js
import dbConnect from '../server/db';

export default async function handler(req, res) {
  try {
    await dbConnect();
    // Aquí puedes interactuar con tu base de datos
    res.status(200).json({ message: 'Conexión exitosa a MongoDB' });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ message: 'Error connecting to the database' });
  }
}