'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { uploadImage } from '@/services/cloudinary';
import Image from 'next/image';
import { HiOutlinePhotograph, HiX } from 'react-icons/hi';

interface ImageUploaderProps {
  onImageUploaded: (imageUrl: string) => void;
  currentImage?: string;
  label?: string;
}

export default function ImageUploader({ onImageUploaded, currentImage, label }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(currentImage);
  const [error, setError] = useState('');

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    setUploading(true);
    setError('');

    try {
      // Crear URL de preview local
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);

      // Subir a Cloudinary
      const result = await uploadImage(file);

      if (result.error) {
        throw new Error(result.error);
      }

      onImageUploaded(result.secure_url);
    } catch (err) {
      setError('Error al subir la imagen. Por favor, intente nuevamente.');
      setPreviewUrl(currentImage); // Restaurar imagen anterior si hay error
    } finally {
      setUploading(false);
    }
  }, [currentImage, onImageUploaded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1,
    multiple: false
  });

  const removeImage = () => {
    setPreviewUrl('');
    onImageUploaded('');
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      
      <div className="relative">
        {previewUrl ? (
          <div className="relative">
            <div className="relative h-48 w-full overflow-hidden rounded-lg">
              <Image
                src={previewUrl}
                alt="Preview"
                fill
                className="object-cover"
              />
            </div>
            <button
              type="button"
              onClick={removeImage}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
            >
              <HiX className="h-5 w-5" />
            </button>
          </div>
        ) : (
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer
              ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-500'}
              ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <input {...getInputProps()} />
            <HiOutlinePhotograph className="h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-500">
              {isDragActive
                ? 'Suelta la imagen aquí'
                : 'Arrastra una imagen o haz clic para seleccionar'}
            </p>
          </div>
        )}

        {uploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600 mt-1">{error}</p>
      )}
    </div>
  );
}
