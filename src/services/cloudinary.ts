export interface UploadResult {
  secure_url: string;
  public_id: string;
  error?: string;
}

const uploadImage = async (file: File, folder: string = 'avaluos'): Promise<UploadResult> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || '');
    formData.append('folder', folder);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Error al subir la imagen');
    }

    const data = await response.json();
    return {
      secure_url: data.secure_url,
      public_id: data.public_id,
    };
  } catch (error) {
    console.error('Error uploading image:', error);
    return {
      secure_url: '',
      public_id: '',
      error: 'Error al subir la imagen',
    };
  }
};

const deleteImage = async (publicId: string): Promise<boolean> => {
  try {
    const timestamp = Math.round((new Date()).getTime() / 1000);
    const signature = await generateSignature(publicId, timestamp);

    const formData = new FormData();
    formData.append('public_id', publicId);
    formData.append('signature', signature);
    formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '');
    formData.append('timestamp', timestamp.toString());

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/destroy`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Error al eliminar la imagen');
    }
    return true;
  } catch (error) {
    console.error('Error deleting image:', error);
    return false;
  }
};

const generateSignature = async (publicId: string, timestamp: number): Promise<string> => {
  const response = await fetch('/api/cloudinary/signature', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      publicId,
      timestamp,
    }),
  });

  if (!response.ok) {
    throw new Error('Error al generar la firma');
  }

  const data = await response.json();
  return data.signature;
};

export { uploadImage, deleteImage };
