import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getMongoDb } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';
import { ObjectId } from 'mongodb';

export async function PUT(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: 'auth.errors.unauthorized' },
        { status: 401 }
      );
    }

    const { name, phone, currentPassword, newPassword } = await request.json();

    // Validaciones básicas
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'profile.errors.requiredFields' },
        { status: 400 }
      );
    }

    const db = await getMongoDb();
    const usersCollection = db.collection('users');

    const user = await usersCollection.findOne({ _id: new ObjectId(session.user.id) });
    if (!user) {
      return NextResponse.json(
        { error: 'profile.errors.userNotFound' },
        { status: 404 }
      );
    }

    // Si se está actualizando la contraseña
    if (newPassword) {
      if (!currentPassword) {
        return NextResponse.json(
          { error: 'profile.errors.currentPasswordRequired' },
          { status: 400 }
        );
      }

      const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
      if (!isPasswordValid) {
        return NextResponse.json(
          { error: 'profile.errors.invalidCurrentPassword' },
          { status: 400 }
        );
      }

      const hashedPassword = await bcrypt.hash(newPassword, 12);
      await usersCollection.updateOne(
        { _id: new ObjectId(session.user.id) },
        {
          $set: {
            name,
            phone,
            password: hashedPassword,
            updatedAt: new Date()
          }
        }
      );
    } else {
      // Solo actualizar nombre y teléfono
      await usersCollection.updateOne(
        { _id: new ObjectId(session.user.id) },
        {
          $set: {
            name,
            phone,
            updatedAt: new Date()
          }
        }
      );
    }

    return NextResponse.json(
      { message: 'profile.success.updated' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Profile update error:', error);
    return NextResponse.json(
      { error: 'profile.errors.updateFailed' },
      { status: 500 }
    );
  }
}
