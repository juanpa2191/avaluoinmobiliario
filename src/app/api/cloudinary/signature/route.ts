import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function POST(request: Request) {
  try {
    const { publicId, timestamp } = await request.json();

    const signature = cloudinary.utils.api_sign_request(
      {
        public_id: publicId,
        timestamp: timestamp,
      },
      process.env.CLOUDINARY_API_SECRET || ''
    );

    return NextResponse.json({ signature });
  } catch (error) {
    console.error('Error generating signature:', error);
    return NextResponse.json(
      { error: 'Error al generar la firma' },
      { status: 500 }
    );
  }
}
