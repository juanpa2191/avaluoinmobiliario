import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    try {
      // Verificar si el usuario está autenticado y tiene el rol correcto para acceder a rutas protegidas
      const token = req.nextauth.token;
      const path = req.nextUrl.pathname;

      // Rutas que requieren rol de administrador
      if (path.startsWith('/admin') && token?.role !== 'admin') {
        return NextResponse.redirect(new URL('/auth/signin', req.url));
      }

      return NextResponse.next();
    } catch (error) {
      console.error('Error en el middleware de autenticación:', error);
      return NextResponse.redirect(new URL('/auth/error', req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
);

// Configurar las rutas que requieren autenticación
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
    '/properties/:path*',
    '/reports/:path*',
    '/settings/:path*'
  ]
};
