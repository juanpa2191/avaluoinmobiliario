import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { connectDB } from '@/lib/db';
import Appraisal from '@/models/appraisal';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    await connectDB();

    const [total, pending, completed] = await Promise.all([
      Appraisal.countDocuments({ userId: session.user.id }),
      Appraisal.countDocuments({ userId: session.user.id, status: 'pending' }),
      Appraisal.countDocuments({ userId: session.user.id, status: 'completed' })
    ]);

    return NextResponse.json({
      total,
      pending,
      completed
    });

  } catch (error) {
    console.error('Error getting appraisal stats:', error);
    return NextResponse.json(
      { error: 'Error al obtener estadísticas' },
      { status: 500 }
    );
  }
}
