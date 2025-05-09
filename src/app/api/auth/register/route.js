import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { getMongoDb } from '@/lib/mongodb';

export async function POST(request) {
  try {
    const { name, email, password, phone } = await request.json();

    // Validaciones básicas
    if (!name || !email || !password || !phone) {
      return NextResponse.json(
        { error: 'auth.errors.requiredFields' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'auth.errors.invalidEmail' },
        { status: 400 }
      );
    }

    // Validar contraseña
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'auth.errors.WeakPassword' },
        { status: 400 }
      );
    }

    // Conectar a la base de datos
    const db = await getMongoDb();
    const usersCollection = db.collection('users');

    // Verificar si el usuario ya existe
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'auth.errors.emailExists' },
        { status: 400 }
      );
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 12);

    // Crear el usuario
    const newUser = {
      name,
      email,
      password: hashedPassword,
      phone,
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await usersCollection.insertOne(newUser);

    if (!result.insertedId) {
      throw new Error('Failed to create user');
    }

    return NextResponse.json(
      { message: 'auth.success.userCreated' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'auth.errors.default' },
      { status: 500 }
    );
  }
}
