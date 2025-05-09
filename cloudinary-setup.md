# Configuración de Cloudinary

Para configurar Cloudinary en el proyecto, necesitas crear un archivo `.env.local` con las siguientes variables:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
```

Pasos para obtener las credenciales:

1. Crear una cuenta en Cloudinary (https://cloudinary.com/users/register/free)
2. Una vez registrado, encontrarás tus credenciales en el Dashboard
3. Copia los valores de:
   - Cloud Name
   - API Key
   - API Secret
4. Pega estos valores en el archivo `.env.local`

IMPORTANTE: Nunca compartas o subas al repositorio el archivo `.env.local`
