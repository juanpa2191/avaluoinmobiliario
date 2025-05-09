import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { connectDB } from '@/lib/db';
import Appraisal from '@/models/appraisal';

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    await connectDB();

    // Obtener el límite de la URL si existe
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')) : null;

    let query = Appraisal.find({ userId: session.user.id })
      .sort({ createdAt: -1 });

    // Aplicar límite si se especifica
    if (limit) {
      query = query.limit(limit);
    }

    const appraisals = await query;

    return NextResponse.json(appraisals);

  } catch (error) {
    console.error('Error getting appraisals:', error);
    return NextResponse.json(
      { error: 'Error al obtener avalúos' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    const data = await request.json();
    await connectDB();

    const appraisal = new Appraisal({
      ...data,
      userId: session.user.id,
      status: 'pending'
    });

    await appraisal.save();

    return NextResponse.json(appraisal);

  } catch (error) {
    console.error('Error creating appraisal:', error);
    return NextResponse.json(
      { error: 'Error al crear avalúo' },
      { status: 500 }
    );
  }
}
